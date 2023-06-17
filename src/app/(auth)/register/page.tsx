'use client'
import React, { FC, useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';

import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import editPasswordValidate from '../../../common/function/validation/editPasswordValidate';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../../menu';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import {  Steps } from 'antd';

import Button from '../../../components/bootstrap/Button';
import User1Img from '../../../assets/img/wanna/wanna2.png';
import Avatar from '../../../components/Avatar';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Wizard, { WizardItem } from '../../../components/Wizard';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Select from '../../../components/bootstrap/forms/Select';
import Label from '../../../components/bootstrap/forms/Label';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import CommonMyWallet from '../../../common/partial/CommonMyWallet';
import SvgCustomApple from '@/components/icon/svg-icons/CustomApple';
import { FmdGood, LocationSearching, Login, Shop, ShoppingBag, ViewAgenda, Work } from '@/components/icon/material-icons';
import SvgShop from '@/components/icon/material-icons/Shop';
import SvgShoppingBag from '@/components/icon/material-icons/ShoppingBag';
import Textarea from '@/components/bootstrap/forms/Textarea';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 0,
  lng: 0,
};
interface IPreviewItemProps {
	title: string;
	value: any | any[];
}
const PreviewItem: FC<IPreviewItemProps> = ({ title, value }) => {
	return (
		<>
			<div className='col-3 text-end'>{title}</div>
			<div className='col-9 fw-bold'>{value || '-'}</div>
		</>
	);
};

interface IValues {
	firstName: string;
	lastName: string;
	displayName: string;
	emailAddress: string;
	addressLine: string;
	phoneNumber: string;
	addressLine2: string;
	city: string;
	state: string;
	zip: string;
	emailNotification: string[];
	pushNotification: string[];
	currentPassword?: string;
	newPassword?: string;
	confirmPassword?: string;
	company: {
		name: string,
		slug: string,
		description: string,
	}
}
const validate = (values: IValues) => {
	const errors: IValues = {
		firstName: '',
		lastName: '',
		displayName: '',
		emailAddress: '',
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
		addressLine: '',
		addressLine2: '',
		phoneNumber: '',
		city: '',
		state: '',
		zip: '',
		emailNotification: [],
		pushNotification: [],
		company: {
			name: '',
			slug: '',
			description: ''
		}
	};
	if (!values.firstName) {
		errors.firstName = 'Required';
	} else if (values.firstName.length < 3) {
		errors.firstName = 'Must be 3 characters or more';
	} else if (values.firstName.length > 20) {
		errors.firstName = 'Must be 20 characters or less';
	}

	if (!values.lastName) {
		errors.lastName = 'Required';
	} else if (values.lastName.length < 3) {
		errors.lastName = 'Must be 3 characters or more';
	} else if (values.lastName.length > 20) {
		errors.lastName = 'Must be 20 characters or less';
	}

	if (!values.displayName) {
		errors.displayName = 'Required';
	} else if (values.displayName.length > 30) {
		errors.displayName = 'Must be 20 characters or less';
	}

	if (!values.emailAddress) {
		errors.emailAddress = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
		errors.emailAddress = 'Invalid email address';
	}

	if (values.currentPassword) {
		if (!values.newPassword) {
			errors.newPassword = 'Please provide a valid password.';
		} else {
			errors.newPassword = '';

			if (values.newPassword.length < 8 || values.newPassword.length > 32) {
				errors.newPassword +=
					'The password must be at least 8 characters long, but no more than 32. ';
			}
			if (!/[0-9]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one digit appear anywhere in the string. ';
			}
			if (!/[a-z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one lowercase letter appear anywhere in the string. ';
			}
			if (!/[A-Z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one uppercase letter appear anywhere in the string. ';
			}
			if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one special character appear anywhere in the string. ';
			}
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Please provide a valid password.';
		} else if (values.newPassword !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match.';
		}
	}

	return errors;
};

const Index: NextPage = () => {
	const router = useRouter();
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const TABS = {
		ACCOUNT_DETAIL: 'Account Details',
		PASSWORD: 'Password',
		MY_WALLET: 'My Wallet',
	};
	const [activeTab, setActiveTab] = useState(TABS.ACCOUNT_DETAIL);

	const notificationTypes = [
		{ id: 1, name: 'New Order' },
		{ id: 2, name: 'New Customer' },
		{ id: 3, name: 'Order Status' },
	];

	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'johndoe',
			emailAddress: 'johndoe@site.com',
			phoneNumber: '',
			addressLine: '',
			addressLine2: '',
			city: '',
			state: '',
			zip: '',
			emailNotification: ['2'],
			pushNotification: ['1', '2', '3'],
			company: {
				name: '',
				slug: '',
				description: ''
			}
		},
		validate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});

	const formikPassword = useFormik({
		initialValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validate: editPasswordValidate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's password have been successfully updated.",
			);
		},
	});
	const [selectedLocation, setSelectedLocation] = useState({
		lat:0,
		lng:0
	});

	const { isLoaded } = useJsApiLoader({
	  googleMapsApiKey: 'AIzaSyBU9Sja1_zSeP3oQySDLYZ7FVYWrq-kGKU',
	});
  
	const handleMapClick = (event:google.maps.MapMouseEvent) => {
	  setSelectedLocation({
		lat: event?.latLng?.lat() as number,
		lng: event?.latLng?.lng() as number,
	  });
	};
	const mapOptions = {
		fullscreenControl: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,
	
	  };
	return (
		<PageWrapper>
			<Head>
				<title>{demoPagesMenu.editPages.subMenu.editWizard.text}</title>
			</Head>

			<Page>
				<div className='row h-100 pb-3'>
					<div className='col-lg-4 col-md-6'>
						<Card stretch>
							<CardHeader className='justify-content-center'>
								<CardLabel >
									<CardTitle>User Information</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-3'>
									<div className='col-12'>
										<Steps className='registerStepper' onChange={(current) => {
											console.log(current);
											setActiveItemIndex(current)
										}}
											direction="vertical"

											current={activeItemIndex}
											items={[
												{
													icon: <Work />,
													title: 'General company information'
												},
												{
													icon: <FmdGood />,
													title: 'Address'
												},
												{
													icon: <Login />,
													title: 'Login details'
												},
												{
													icon: <ViewAgenda />,
													title: 'Preview'
												},
											]}
										/>
									</div>

								</div>
							</CardBody>

						</Card>
					</div>
					<div className='col-lg-8 col-md-6'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Wizard

								isHeader
								setActiveItemIndex={setActiveItemIndex}
								activeItemIndex={activeItemIndex}
								color='info'
								noValidate
								onSubmit={formik.handleSubmit}
								className='shadow-3d-info'>
								<WizardItem id='step1' title='Account Detail'>
									<Card>
										<CardBody>
											
											<div className='row g-4 align-items-center'>
												<div className='col-xl-auto'>
													<Avatar src={User1Img} />
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																This will be your company logo
															</p>
														</div>
													</div>
												</div>
											</div>

										
										</CardBody>
									</Card>

									<Card>
										<CardHeader>
											<CardLabel icon='Edit' iconColor='warning'>
												<CardTitle>Site Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4 mb-3'>
												<div className='col-md-6'>
													<FormGroup
														id='name'
														label='Company Name'
														isFloating>
														<Input
															name='company.name'
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.company.name}
															isValid={formik.isValid}
															isTouched={formik.touched.company?.name}
															invalidFeedback={
																formik.errors.company?.name
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-md-6'>
													<FormGroup
														id='slug'
														label='slug'
														formText='This will be visibal as your company slug, services. This is your unique identity. This is not change able'

														isFloating>
														<Input
															placeholder='company slug'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.company.slug}
															isValid={formik.isValid}
															isTouched={formik.touched.company?.slug}
															invalidFeedback={formik.errors.company?.slug}
															validFeedback='Looks good!'

														/>
													</FormGroup>
												</div>
												<div className='col-md-6'>
													<FormGroup
														id='slug'
														// label='Working phone'
														formText='You can change this later'

														isFloating>
														<ConfigProvider locale={en}>
															<CountryPhoneInput inline />
														</ConfigProvider>
														{/* <Input
															placeholder='company slug'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.company.slug}
															isValid={formik.isValid}
															isTouched={formik.touched.company?.slug}
															invalidFeedback={formik.errors.company?.slug}
															validFeedback='Looks good!'
															
														/> */}
													</FormGroup>
												</div>
												<div className='col-md-6'>
													<FormGroup
														id='slug'
														formText='You can change this later'
														label='select'
														isFloating>

														<Select

															// autoComplete='family-name'
															onChange={formik.handleChange}
															list={[{
																text: 'Listing',
																value: 'Listing'
															}]}
															onBlur={formik.handleBlur}
															value={formik.values.company.slug}
															isValid={formik.isValid}
															isTouched={formik.touched.company?.slug}
															invalidFeedback={formik.errors.company?.slug}
															validFeedback='Looks good!' ariaLabel={''}
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup
														id='description'
														label='Compny description'
														isFloating
														formText='This will be how your name will be displayed in the account section and in reviews'>
														<Textarea
															height='100px'
															placeholder='Display Name'
															autoComplete='username'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.company.description}
															isValid={formik.isValid}
															isTouched={formik.touched.company?.description}
															invalidFeedback={
																formik.errors.company?.description
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>

											</div>
											<div className='row g-4 align-items-center '>
												<div className='col-xl-auto'>
													<Avatar src={User1Img} size={80}/>
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																This will be your company avater
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>


								</WizardItem>
								<WizardItem id='step2' title='Address'>
									<div className='row g-4'>
										
									

										<div className='col-lg-6'>
											<FormGroup id='city' label='Country' isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.city}
													isValid={formik.isValid}
													isTouched={formik.touched.city}
													invalidFeedback={formik.errors.city}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-md-3'>
											<FormGroup id='state' label='State' isFloating>
												<Select
													ariaLabel='State'
													placeholder='Choose...'
													list={[
														{ value: 'usa', text: 'USA' },
														{ value: 'ca', text: 'Canada' },
													]}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.state}
													isValid={formik.isValid}
													isTouched={formik.touched.state}
													invalidFeedback={formik.errors.state}
												/>
											</FormGroup>
										</div>
										<div className='col-md-3'>
											<FormGroup id='zip' label='Zip' isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.zip}
													isValid={formik.isValid}
													isTouched={formik.touched.zip}
													invalidFeedback={formik.errors.zip}
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine'
												label='Street address'
												isFloating>
												<Input
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.addressLine}
													isValid={formik.isValid}
													isTouched={formik.touched.addressLine}
													invalidFeedback={formik.errors.addressLine}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
{										isLoaded ? (
    <GoogleMap options={mapOptions}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onClick={handleMapClick}
    >
      {selectedLocation && <Marker position={selectedLocation} />}
    </GoogleMap>
  ) : (
    <></>
  )}

										</div>
									</div>
								</WizardItem>
								<WizardItem id='step3' title='Notifications'>
									<Card>
										<CardBody>
											<div className='row g-4 align-items-center'>
												<div className='col-xl-auto'>
													<Avatar src={User1Img} />
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																Avatar helps your teammates get to
																know you.
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card>
										<CardHeader>
											<CardLabel icon='Edit' iconColor='warning'>
												<CardTitle>Personal Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-md-6'>
													<FormGroup
														id='firstName'
														label='First Name'
														isFloating>
														<Input
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.firstName}
															isValid={formik.isValid}
															isTouched={formik.touched.firstName}
															invalidFeedback={
																formik.errors.firstName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-md-6'>
													<FormGroup
														id='lastName'
														label='Last Name'
														isFloating>
														<Input
															placeholder='Last Name'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.lastName}
															isValid={formik.isValid}
															isTouched={formik.touched.lastName}
															invalidFeedback={formik.errors.lastName}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											
											</div>
										</CardBody>
									</Card>

									<Card >
										<CardHeader>
											<CardLabel icon='MarkunreadMailbox' iconColor='success'>
												<CardTitle>Contact Information</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-12'>
													<FormGroup
														id='phoneNumber'
														label='Phone Number'
														isFloating>
														<Input
															placeholder='Phone Number'
															type='tel'
															autoComplete='tel'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.phoneNumber}
															isValid={formik.isValid}
															isTouched={formik.touched.phoneNumber}
															invalidFeedback={
																formik.errors.phoneNumber
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup
														id='emailAddress'
														label='Email address'
														isFloating>
														<Input
															type='email'
															placeholder='Email address'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailAddress}
															isValid={formik.isValid}
															isTouched={formik.touched.emailAddress}
															invalidFeedback={
																formik.errors.emailAddress
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>

									<Card className='mb-0'>
										<CardHeader>
											<CardLabel icon='LockOpen' iconColor='primary'>
												<CardTitle>Credentials</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody className='pt-0'>
											<div className='row g-4'>
												<div className='col-12'>
													<FormGroup
														id='phoneNumber'
														label='Password'
														isFloating>
														<Input
															placeholder='Password'
															type='password'
															autoComplete='tel'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.phoneNumber}
															isValid={formik.isValid}
															isTouched={formik.touched.phoneNumber}
															invalidFeedback={
																formik.errors.phoneNumber
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-12'>
													<FormGroup
														id='emailAddress'
														label='Confirm password'
														isFloating>
														<Input
															type='password'
															placeholder='Confirm password'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailAddress}
															isValid={formik.isValid}
															isTouched={formik.touched.emailAddress}
															invalidFeedback={
																formik.errors.emailAddress
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>
								</WizardItem>
								<WizardItem id='step4' title='Preview'>
									<div className='row g-3'>
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Personal Information</h4>
										</div>
										<PreviewItem
											title='First Name'
											value={formik.values.firstName}
										/>
										<PreviewItem
											title='Last Name'
											value={formik.values.lastName}
										/>
										<PreviewItem
											title='Display Name'
											value={formik.values.displayName}
										/>
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Contact Information</h4>
										</div>
										<PreviewItem
											title='Phone Number'
											value={formik.values.phoneNumber}
										/>
										<PreviewItem
											title='Email Address'
											value={formik.values.emailAddress}
										/>
										<div className='col-9 offset-3'>
											<h3 className='mt-4'>Address</h3>
										</div>
										<PreviewItem
											title='Address Line'
											value={formik.values.addressLine}
										/>
										<PreviewItem
											title='Address Line 2'
											value={formik.values.addressLine2}
										/>
										<PreviewItem title='City' value={formik.values.city} />
										<PreviewItem title='State' value={formik.values.state} />
										<PreviewItem title='ZIP' value={formik.values.zip} />
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Notification</h4>
										</div>
										<PreviewItem
											title='Email Notifications'
											value={notificationTypes.map(
												(cat) =>
													formik.values.emailNotification.includes(
														cat.id.toString(),
													) && `${cat.name}, `,
											)}
										/>
										<PreviewItem
											title='Push Notifications'
											value={notificationTypes.map(
												(cat) =>
													formik.values.pushNotification.includes(
														cat.id.toString(),
													) && `${cat.name}, `,
											)}
										/>
									</div>
								</WizardItem>
							</Wizard>
						)}
						{TABS.PASSWORD === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikPassword.handleSubmit}>
								<CardHeader>
									<CardLabel icon='LocalPolice' iconColor='info'>
										<CardTitle>{TABS.PASSWORD}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
										<div className='col-12'>
											<FormGroup
												id='currentPassword'
												label='Current password'
												isFloating>
												<Input
													type='password'
													placeholder='Current password'
													autoComplete='current-password'
													onChange={formikPassword.handleChange}
													value={formikPassword.values.currentPassword}
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<FormGroup
												id='newPassword'
												label='New password'
												isFloating>
												<Input
													type='password'
													placeholder='New password'
													autoComplete='new-password'
													onChange={formikPassword.handleChange}
													onBlur={formikPassword.handleBlur}
													value={formikPassword.values.newPassword}
													isValid={formikPassword.isValid}
													isTouched={formikPassword.touched.newPassword}
													invalidFeedback={
														formikPassword.errors.newPassword
													}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-12'>
											<FormGroup
												id='confirmPassword'
												label='Confirm new password'
												isFloating>
												<Input
													type='password'
													placeholder='Confirm new password'
													autoComplete='new-password'
													onChange={formikPassword.handleChange}
													onBlur={formikPassword.handleBlur}
													value={formikPassword.values.confirmPassword}
													isValid={formikPassword.isValid}
													isTouched={
														formikPassword.touched.confirmPassword
													}
													invalidFeedback={
														formikPassword.errors.confirmPassword
													}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
									</div>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formikPassword.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={
												!formikPassword.isValid &&
												!!formikPassword.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.MY_WALLET === activeTab && <CommonMyWallet />}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};



export default Index;
