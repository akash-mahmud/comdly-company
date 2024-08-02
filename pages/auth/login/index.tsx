import React, { FC, useCallback, useContext, useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter,  } from 'next/router';
import { useFormik } from 'formik';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext';
import useDarkMode from '../../../hooks/useDarkMode';
import USERS, { getUserDataWithUsername } from '../../../common/data/userDummyData';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Logo from '../../../components/Logo';
import Button from '../../../components/bootstrap/Button';
import Alert from '../../../components/bootstrap/Alert';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Spinner from '../../../components/bootstrap/Spinner';
import { useCompanyLoginMutation, useCompanyRegisterMutation } from '../../../src/graphql/generated/schema';
import { demoPagesMenu } from '../../../menu';
import { USER_COOKIE } from '../../../utils/session';
import { notification, Spin } from 'antd';

interface ILoginHeaderProps {
	isNewUser?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ isNewUser }) => {
	if (isNewUser) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
				<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

interface ILoginProps {
	isSignUp?: boolean;
}
const Login: NextPage<ILoginProps> = ({ isSignUp }) => {
	const router = useRouter();

	const { authorize } = useContext(AuthContext);

	const { darkModeStatus } = useDarkMode();

	const [signInPassword, setSignInPassword] = useState<boolean>(false);
	const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);
	// const searchQuery = useSearchParams()
// const redirectTo = searchQuery?.get("redirectTo")
const redirectTo = ""
const [Login , {loading:companyLoginLoading}] = useCompanyLoginMutation()
	const handleOnLogin = useCallback( async(values: {
    email: string;
    password: string;
}) => {
const {data} = await Login({
	variables:{
	...values
	}
})
if (data?.companyLogin?.success) {
	const {accessToken , user} = data?.companyLogin
	const localStoreVal = {
	  token: accessToken
	}
	localStorage.setItem(USER_COOKIE,accessToken??"")
	authorize()
	if (redirectTo) {
	 router.push(redirectTo)

	}else{
	 router.push('/')

	}
	// notification.success({
	//  message:'Logged in'
	// })
   }else{
console.log(data);

   }
	// router.push('/')
}, [router]);

const [register , {loading}] = useCompanyRegisterMutation()

	const handelRegister = useCallback(async (values:{
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        phoneNumber: string;
    }) => {
 const {data} = await register({
	variables:{
		input: values
	}
 })
if (data?.companyRegister?.success) {
	notification.success({
		message:"Account created successfully"
	})
	router.push("/auth/login")
		setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
}
	}, [router]

	)


	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			const errors: { email?: string; password?: string } = {};

			if (!values.email) {
				errors.email = 'Required';
			}

			if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: async (values:{
			email:string, 
			password:string
		}) => {
			
	

				await	handleOnLogin(values);
			
			
		},
	});


	const formikForRegister = useFormik({
		enableReinitialize: true,
		initialValues: {
	email:'',
	password:'',
	firstname:'',
	lastname:'',
	phoneNumber:''
		},
	
		validateOnChange: false,
		onSubmit: (values) => {
			
		handelRegister(values)

		},
	});



	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleContinue = () => {
		setIsLoading(true);
		setTimeout(() => {
		
				setSignInPassword(true);
			
			setIsLoading(false);
		}, 1000);
	};

	return (
		<PageWrapper
			isProtected={false}
			className={classNames({ 'bg-dark': !singUpStatus, 'bg-light': singUpStatus })}>
			<Head>
				<title>{singUpStatus ? 'Sign Up' : 'Login'}</title>
			</Head>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										href='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Login
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<LoginHeader isNewUser={singUpStatus} />
							
									<Spin spinning={loading ||companyLoginLoading}>
								<form className='row g-4'>
									{singUpStatus ? (
										<>
											{/* 
										
										Register form
										*/}

											<div className='col-12'>
												<FormGroup
													id='email'
													isFloating
													
													label='Your email'>
													<Input type='email' autoComplete='email'
													
													value={formikForRegister.values.email}
													isTouched={formikForRegister.touched.email}
													invalidFeedback={
														formikForRegister.errors.email
													}
													isValid={formikForRegister.isValid}
													onChange={formikForRegister.handleChange}
													onBlur={formikForRegister.handleBlur}
													onFocus={() => {
														formikForRegister.setErrors({});
													}}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='firstname'
													isFloating
													label='First name'
												>
													<Input 	value={formikForRegister.values.firstname}
													isTouched={formikForRegister.touched.firstname}
													invalidFeedback={
														formikForRegister.errors.firstname
													}
													isValid={formikForRegister.isValid}
													onChange={formikForRegister.handleChange}
													onBlur={formikForRegister.handleBlur}
													onFocus={() => {
														formikForRegister.setErrors({});
													}} 
														autoComplete='given-name' />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='lastname'
													isFloating
													label='Last name'
												>
													<Input value={formikForRegister.values.lastname}
													isTouched={formikForRegister.touched.lastname}
													invalidFeedback={
														formikForRegister.errors.lastname
													}
													isValid={formikForRegister.isValid}
													onChange={formikForRegister.handleChange}
													onBlur={formikForRegister.handleBlur}
													onFocus={() => {
														formikForRegister.setErrors({});
													}} 
														autoComplete='family-name' />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='phoneNumber'
													isFloating
													label='phoneNumber'
												>
													<Input value={formikForRegister.values.phoneNumber}
													isTouched={formikForRegister.touched.phoneNumber}
													invalidFeedback={
														formikForRegister.errors.phoneNumber
													}
													isValid={formikForRegister.isValid}
													onChange={formikForRegister.handleChange}
													onBlur={formikForRegister.handleBlur}
													onFocus={() => {
														formikForRegister.setErrors({});
													}}  autoComplete='family-name'/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='password'
													isFloating
													label='Password'
												>
													<Input value={formikForRegister.values.password}
													isTouched={formikForRegister.touched.password}
													invalidFeedback={
														formikForRegister.errors.password
													}
													isValid={formikForRegister.isValid}
													onChange={formikForRegister.handleChange}
													onBlur={formikForRegister.handleBlur}
													onFocus={() => {
														formikForRegister.setErrors({});
													}}  

														type='password'
														autoComplete='password'
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<Button
													color='info'
													className='w-100 py-3'
													onClick={formikForRegister.handleSubmit}>
													Sign Up
												</Button>
											</div>
									
										</>
									) : (
										<>

											{/* 
										
										Login Form
										
										*/}

											<div className='col-12 '>
												<FormGroup
													id='email'
													isFloating
													label='Your email or username'
													className={classNames({
														'd-none': signInPassword,
													})}>
													<Input
														autoComplete='username'
														value={formik.values.email}
														isTouched={formik.touched.email}
														invalidFeedback={
															formik.errors.email
														}
														isValid={formik.isValid}
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														onFocus={() => {
															formik.setErrors({});
														}}
													/>
												</FormGroup>
												{signInPassword && (
													<div className='text-center h4 mb-3 fw-bold'>
														Hi, {formik.values.email}.
													</div>
												)}
												<FormGroup 
													id='password'
													isFloating
													label='Password'
													className={classNames({
														'd-none': !signInPassword,
													})}>
													<Input
														type='password'
														autoComplete='current-password'
														value={formik.values.password}
														isTouched={formik.touched.password}
														invalidFeedback={
															formik.errors.password
														}
														validFeedback='Looks good!'
														isValid={formik.isValid}
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												{!signInPassword ? (
													<Button
														color='warning'
														className='w-100 py-3'
														isDisable={!formik.values.email}
														onClick={handleContinue}>
														{isLoading && (
															<Spinner isSmall inButton isGrow />
														)}
														Continue
													</Button>
												) : (
													<Button
														color='warning'
														className='w-100 py-3'
														onClick={formik.handleSubmit}>
														Login
													</Button>
												)}
											</div>
										</>
									)}


								</form>
										</Spin>
							</CardBody>
						</Card>
						<div className='text-center'>
							<Link
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Privacy policy
							</Link>
							<Link
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Terms of use
							</Link>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Login;
