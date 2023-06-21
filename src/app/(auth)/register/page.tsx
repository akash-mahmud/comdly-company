'use client'
import React, { FC, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import CountryPhoneInput, { ConfigProvider, CountryPhoneInputValue } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import editPasswordValidate from '../../../common/function/validation/editPasswordValidate';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../../menu';
import { Spin, Steps } from 'antd';
import Button from '../../../components/bootstrap/Button';
import User1Img from '../../../assets/img/wanna/wanna2.png';
import Avatar from '../../../components/Avatar';
import Page from '../../../layout/Page/Page';
import Card, {
	CardBody,

	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Wizard, { WizardItem } from '../../../components/Wizard';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Select from '../../../components/bootstrap/forms/Select';

import { FmdGood,  Login,  ViewAgenda, Work } from '@/components/icon/material-icons';

import Textarea from '@/components/bootstrap/forms/Textarea';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useAppDispatch, useAppSelector } from '@/store';
import { register } from '@/store/slices/auth/authSlice';

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

	userInput: {
		email: string
		firstname: string,
		lastname: string,
		password: string,
		phoneNumber: string

		confirmPassword?: string;
	}
	ownerInput: {
		name: string
	},

	locationInput: {
		country: string
		state: string
		city: string

		zip: string
		streetAddress: string
	},
	geoLocationInput: {
		longitude: number
		latitude: number
	},



	companyInput: {
		name: string,
		slug: string,
		description: string,
		logo: string,
		avater: string

	}

}

const validate = (values: IValues) => {
	const errors: IValues = {


		userInput: {
			email: '',
			firstname: '',
			lastname: '',
			password: '',

			phoneNumber: '',
			confirmPassword: ''
		},
		ownerInput: {
			name: ''
		},

		locationInput: {
			country: '',
			state: '',
			city: '',

			zip: '',
			streetAddress: ''
		},
		geoLocationInput: {
			longitude: 0,
			latitude: 0
		},



		companyInput: {
			name: '',
			slug: '',
			description: '',
			logo: '',
			avater: ''

		}



	};
	if (!values.userInput.firstname) {
		errors.userInput.firstname = 'Required';
	} else if (values.userInput.firstname.length < 3) {
		errors.userInput.firstname = 'Must be 3 characters or more';
	} else if (values.userInput.firstname.length > 20) {
		errors.userInput.firstname = 'Must be 20 characters or less';
	}

	if (!values.userInput.lastname) {
		errors.userInput.lastname = 'Required';
	} else if (values.userInput.lastname.length < 3) {
		errors.userInput.lastname = 'Must be 3 characters or more';
	} else if (values.userInput.lastname.length > 20) {
		errors.userInput.lastname = 'Must be 20 characters or less';
	}

	if (!values.ownerInput.name) {
		errors.ownerInput.name = 'Required';
	} else if (values.ownerInput.name.length > 30) {
		errors.ownerInput.name = 'Must be 20 characters or less';
	}

	if (!values.userInput.email) {
		errors.userInput.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userInput.email)) {
		errors.userInput.email = 'Invalid email address';
	}

	if (values.userInput.password) {
		if (!values.userInput.password) {
			errors.userInput.password = 'Please provide a valid password.';
		} else {
			errors.userInput.password = '';

			if (values.userInput.password.length < 8 || values.userInput.password.length > 32) {
				errors.userInput.password +=
					'The password must be at least 8 characters long, but no more than 32. ';
			}
			if (!/[0-9]/g.test(values.userInput.password)) {
				errors.userInput.password +=
					'Require that at least one digit appear anywhere in the string. ';
			}
			if (!/[a-z]/g.test(values.userInput.password)) {
				errors.userInput.password +=
					'Require that at least one lowercase letter appear anywhere in the string. ';
			}
			if (!/[A-Z]/g.test(values.userInput.password)) {
				errors.userInput.password +=
					'Require that at least one uppercase letter appear anywhere in the string. ';
			}
			if (!/[!@#$%^&*)(+=._-]+$/g.test(values.userInput.password)) {
				errors.userInput.password +=
					'Require that at least one special character appear anywhere in the string. ';
			}
		}

		if (!values.userInput.confirmPassword) {
			errors.userInput.confirmPassword = 'Please provide a valid password.';
		} else if (values.userInput.password !== values.userInput.confirmPassword) {
			errors.userInput.confirmPassword = 'Passwords do not match.';
		}
	}

	return errors;
};

const Index: NextPage = () => {
	const router = useRouter();
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const [countryCodedPhoneNumber, setcountryCodedPhoneNumber] = useState<CountryPhoneInputValue>()
const [loading, setLoading] = useState(false)
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
const dispatch = useAppDispatch()

	const formik = useFormik({
		initialValues: {
			userInput: {
				email: '',
				firstname: '',
				lastname: '',
				password: '',
				phoneNumber: '',

				confirmPassword: ''
			},
			ownerInput: {
				name: ''
			},

			locationInput: {
				country: '',
				state: '',
				city: '',

				zip: '',
				streetAddress: ''
			},
			geoLocationInput: {
				longitude: 0,
				latitude: 0
			},



			companyInput: {
				name: '',
				slug: '',
				description: '',
				logo: 'https://assets.entrepreneur.com/franchise/282495-avatar-image-1596119090.jpeg',
				avater: 'https://i.pinimg.com/736x/aa/92/89/aa9289de1ed2865bccd7c7457f246482--fun-restaurants-kentucky-fried.jpg'

			}
		},
		validate,
		onSubmit: async () => {
			setLoading(true)
			try {
				const data = formik.values
				console.log(data);
				console.log(countryCodedPhoneNumber);
	data.userInput.phoneNumber =`${countryCodedPhoneNumber?.code} ${countryCodedPhoneNumber?.phone}`
	data.geoLocationInput.latitude = selectedLocation?.lat as number
	data.geoLocationInput.longitude = selectedLocation?.lng as number
	await dispatch(register(data))
			
			} catch (error) {
				console.log(error);
				
			}
			setLoading(false)

		
		},
	});


	interface location {
		lat: number
		lng: number
	}
	const [selectedLocation, setSelectedLocation] = useState<null | location>(null);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBU9Sja1_zSeP3oQySDLYZ7FVYWrq-kGKU',
	});

	const handleMapClick = (event: google.maps.MapMouseEvent) => {
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
<Spin spinning={loading}>
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
															name='companyInput.name'
															placeholder=' Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.companyInput.name}
															isValid={formik.isValid}
															isTouched={formik.touched.companyInput?.name}
															invalidFeedback={
																formik.errors.companyInput?.name
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
														name='companyInput.slug'
															placeholder='company slug'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.companyInput.slug}
															isValid={formik.isValid}
															isTouched={formik.touched.companyInput?.slug}
															invalidFeedback={formik.errors.companyInput?.slug}
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
														<ConfigProvider  locale={en}>
															<CountryPhoneInput autoFocus={false} type='number' autoComplete='off' id='phoneNumber' name='phoneNumber'  inline onChange={(number)=> {
																setcountryCodedPhoneNumber(number) 
															}}/>
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
															value={formik.values.companyInput.slug}
															isValid={formik.isValid}
															isTouched={formik.touched.companyInput?.slug}
															invalidFeedback={formik.errors.companyInput?.slug}
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
																											name='companyInput.description'

															height='100px'
															placeholder='Display Name'
															autoComplete='username'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.companyInput.description}
															isValid={formik.isValid}
															isTouched={formik.touched.companyInput?.description}
															invalidFeedback={
																formik.errors.companyInput?.description
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>

											</div>
											<div className='row g-4 align-items-center '>
												<div className='col-xl-auto'>
													<Avatar src={User1Img} size={80} />
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
												name='locationInput.country'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.locationInput.country}
													isValid={formik.isValid}
													isTouched={formik.touched?.locationInput?.country}
													invalidFeedback={formik.errors?.locationInput?.country}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup id='city' label='City' isFloating>
												<Input
												name='locationInput.city'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.locationInput.city}
													isValid={formik.isValid}
													isTouched={formik.touched?.locationInput?.city}
													invalidFeedback={formik.errors?.locationInput?.city}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-md-4'>
											<FormGroup id='state' label='State' isFloating>
												<Select
												name='locationInput.state'
													ariaLabel='State'
													placeholder='Choose...'
													list={[
														{ value: 'usa', text: 'USA' },
														{ value: 'ca', text: 'Canada' },
													]}
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.locationInput.state}
													isValid={formik.isValid}
													isTouched={formik.touched?.locationInput?.state}
													invalidFeedback={formik.errors?.locationInput?.state}
												/>
											</FormGroup>
										</div>
										<div className='col-md-4'>
											<FormGroup id='zip' label='Zip' isFloating>
												<Input
												name='locationInput.zip'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values?.locationInput?.zip}
													isValid={formik.isValid}
													isTouched={formik.touched?.locationInput?.zip}
													invalidFeedback={formik.errors?.locationInput?.zip}
												/>
											</FormGroup>
										</div>
										<div className='col-lg-4'>
											<FormGroup
												id='addressLine'
												label='Street address'
												isFloating>
												<Input
												name='locationInput.streetAddress'
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values?.locationInput?.streetAddress}
													isValid={formik.isValid}
													isTouched={formik.touched?.locationInput?.streetAddress}
													invalidFeedback={formik.errors?.locationInput?.streetAddress}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											{isLoaded ? (
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
								<WizardItem id='step3' title='Personal Information'>
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
														name='userInput.firstname'
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.userInput.firstname}
															isValid={formik.isValid}
															isTouched={formik.touched.userInput?.firstname}
															invalidFeedback={
																formik.errors.userInput?.firstname
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
														name='userInput.lastname'
															placeholder='Last Name'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.userInput?.lastname}
															isValid={formik.isValid}
															isTouched={formik.touched.userInput?.lastname}
															invalidFeedback={formik.errors.userInput?.lastname}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-md-12'>
													<FormGroup
														id='ownername'
														label='Owner Name'
														isFloating>
														<Input
															placeholder='Owner Name'
															name='ownerInput.name'

															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.ownerInput?.name}
															isValid={formik.isValid}
															isTouched={formik.touched.ownerInput?.name}
															invalidFeedback={formik.errors.ownerInput?.name}
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
															name='userInput.phoneNumber'
															autoComplete='tel'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values?.userInput.phoneNumber}
															isValid={formik.isValid}
															isTouched={formik.touched?.userInput?.phoneNumber}
															invalidFeedback={
																formik.errors?.userInput?.phoneNumber
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
														name='userInput.email'
															type='email'
															placeholder='Email address'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.userInput?.email}
															isValid={formik.isValid}
															isTouched={formik.touched.userInput?.email}
															invalidFeedback={
																formik.errors.userInput?.email
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
														name='userInput.password'
															placeholder='Password'
															type='password'
															autoComplete='tel'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values?.userInput?.password}
															isValid={formik.isValid}
															isTouched={formik.touched?.userInput?.password}
															invalidFeedback={
																formik.errors?.userInput?.password
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
														name='userInput.confirmPassword'
															type='password'
															placeholder='Confirm password'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.userInput?.confirmPassword}
															isValid={formik.isValid}
															isTouched={formik.touched.userInput?.confirmPassword}
															invalidFeedback={
																formik.errors.userInput?.confirmPassword
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
											value={formik.values.userInput.firstname}
										/>
										<PreviewItem
											title='Last Name'
											value={formik.values.userInput.lastname}
										/>
										<PreviewItem
											title='Display Name'
											value={formik.values.ownerInput.name}
										/>
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Contact Information</h4>
										</div>
										<PreviewItem
											title='Phone Number'
											value={formik.values.userInput.phoneNumber}
										/>
										<PreviewItem
											title='Email Address'
											value={formik.values.userInput.email}
										/>
										<div className='col-9 offset-3'>
											<h3 className='mt-4'>Address</h3>
										</div>
										<PreviewItem
											title='Address Line'
											value={formik.values.locationInput.streetAddress}
										/>

										<PreviewItem title='City' value={formik.values.locationInput.city} />
										<PreviewItem title='State' value={formik.values.locationInput.state} />
										<PreviewItem title='ZIP' value={formik.values.locationInput.zip} />
										<div className='col-9 offset-3'>
											<h4 className='mt-4'>Notification</h4>
										</div>


									</div>
								</WizardItem>
							</Wizard>
						)}

					</div>
				</div>
			</Page>
</Spin>
			
		</PageWrapper>
	);
};



export default Index;
