import React, { useCallback, useContext, useState } from 'react'

import { useFormik } from 'formik'
import { notification, Spin } from 'antd'
import Card, { CardBody } from '@/components/bootstrap/Card'
import FormGroup from '@/components/bootstrap/forms/FormGroup';
import Textarea from '@/components/bootstrap/forms/Textarea';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { useCreateOneCompanyMutation, useUploadFileMutation } from '@/graphql/generated/schema';
import Input from '@/components/bootstrap/forms/Input';
import Button from '@/components/bootstrap/Button';
import AuthContext from '@/context/authContext';
import { UploadFile } from '@/components/icon/material-icons';
import { useRouter } from 'next/router';
export default function index() {
	const formik = useFormik({
		enableReinitialize: true,

		initialValues: {
			name: '',
			description: '',
			slug: '',
			avater: '',
			fetaureImage: '',
			logo: '',
			location: {
				create: {
					country: "",
					state: "",
					city: "",

					zip: "",
					streetAddress: "",

				}
			},
			geolocation: {
				create: {
					longitude: 0.0,
					latitude: 0.0,

				}
			},


		},
		// validate: (values) => {
		// 	const errors: { email?: string; password?: string } = {};

		// 	if (!values.email) {
		// 		errors.email = 'Required';
		// 	}

		// 	if (!values.password) {
		// 		errors.password = 'Required';
		// 	}

		// 	return errors;
		// },
		validateOnChange: false,

		onSubmit: async (values) => {



			await createCompany(values);


		},
	});
	const [CreateCompany, { loading }] = useCreateOneCompanyMutation()
	const [Upload, { loading: fileUploadLoading }] = useUploadFileMutation()
	const router = useRouter()
	const { user, authorize } = useContext(AuthContext)
	const createCompany = useCallback(
		async (data: {

			name: string;
			description: string;
			slug: string;
			avater: string,
			fetaureImage: string,
			logo: string,
			location: {
				create: {
					country: string;
					state: string;
					city: string;
					zip: string;
					streetAddress: string;
				};
			};
			geolocation: {
				create: {
					longitude: number;
					latitude: number;
				};
			};

		}) => {
			try {




				const { data: res } = await CreateCompany({
					variables: {
						data: {
							...data,

							user: {
								connect: {
									id: user?.id
								}
							}
						}
					}
				})

				if (res?.createOneCompany.id) {
					notification.success({
						message: 'Created'
					})
					authorize()
					router.push("/")
				} else {
					notification.error({
						message: 'Something went wrong'
					})

				}
			} catch (error) {
				notification.error({
					message: 'Something went wrong'
				})
			}

		},
		[user],
	)

	return (
		<PageWrapper>

			<div>
				<Card stretch>

					<CardBody>
						<Spin spinning={loading}>

							<form className='row g-4' onSubmit={formik.handleSubmit}>

								<div className='col-md-4'>
									<FormGroup
										id='name'
										label='Name'
									>
										<Input type='text' size={'lg'} value={formik.values.name}
											isTouched={formik.touched.name}
											invalidFeedback={
												formik.errors.name
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}}

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='slug'
										label='slug'
									>
										<Input type='text' size={'lg'} value={formik.values.slug}
											isTouched={formik.touched.slug}
											invalidFeedback={
												formik.errors.slug
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='location.create.country'
										label='Country'
									>
										<Input type='text' size={'lg'} value={formik.values.location.create.country}
											isTouched={formik.touched.location?.create?.country}
											invalidFeedback={
												formik.errors.location?.create?.country
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>   <div className='col-md-4'>
									<FormGroup
										id='location.create.state'
										label='State'
									>
										<Input type='text' size={'lg'} value={formik.values.location.create.state}
											isTouched={formik.touched.location?.create?.state}
											invalidFeedback={
												formik.errors.location?.create?.state
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='location.create.city'
										label='City'
									>
										<Input type='text' size={'lg'} value={formik.values.location.create.city}
											isTouched={formik.touched.location?.create?.city}
											invalidFeedback={
												formik.errors.location?.create?.city
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='location.create.zip'
										label='zip'
									>
										<Input type='text' size={'lg'} value={formik.values.location.create.zip}
											isTouched={formik.touched.location?.create?.zip}
											invalidFeedback={
												formik.errors.location?.create?.zip
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='location.create.streetAddress'
										label='streetAddress'
									>
										<Input type='text' size={'lg'} value={formik.values.location.create.streetAddress}
											isTouched={formik.touched.location?.create?.streetAddress}
											invalidFeedback={
												formik.errors.location?.create?.streetAddress
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>

								<div className='col-md-4'>
									<FormGroup
										id='geolocation.create.longitude'
										label='longitude'
									>
										<Input type='number' size={'lg'} value={formik.values.geolocation.create.longitude}
											isTouched={formik.touched.geolocation?.create?.longitude}
											invalidFeedback={
												formik.errors.geolocation?.create?.longitude
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='col-md-4'>
									<FormGroup
										id='geolocation.create.latitude'
										label='latitude'
									>
										<Input type='number' size={'lg'} value={formik.values.geolocation.create.latitude}
											isTouched={formik.touched.geolocation?.create?.latitude}
											invalidFeedback={
												formik.errors.geolocation?.create?.latitude
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>

								<div className='col-md-4'>
									<div className="d-flex flex-column">
										<FormGroup
											id='logo'
											label='Logo'
										>
											<Input type='file' size={'lg'}


												onChange={async (e) => {

													const { data } = await Upload({
														variables: {
															file: e.target.files[0]
														}
													})
													formik.setFieldValue("logo", data?.uploadFile?.file)



												}

												}


											/>
										</FormGroup>


									</div>

								</div>
								<div className='col-md-4'>
									<div className="d-flex flex-column">
										<FormGroup
											id='avater'
											label='Avater'
										>
											<Input type='file' size={'lg'}

												onChange={async (e) => {

													const { data } = await Upload({
														variables: {
															file: e.target.files[0]
														}
													})
													formik.setFieldValue("avater", data?.uploadFile?.file)




												}

												}
												className=''

											/>
										</FormGroup>


									</div>

								</div>
								<div className='col-md-4'>
									<div className="d-flex flex-column">
										<FormGroup
											id='fetaureImage'
											label='Cover Photo'
										>
											<Input type='file' size={'lg'}
												onChange={async (e) => {

													const { data } = await Upload({
														variables: {
															file: e.target.files[0]
														}
													})
													formik.setFieldValue("fetaureImage", data?.uploadFile?.file)



												}}

												className=''

											/>
										</FormGroup>


									</div>

								</div>
								<div className='col-md-12'>
									<FormGroup
										id='description'
										label='Description'
									>
										<Textarea size={'lg'} value={formik.values.description}
											isTouched={formik.touched.description}
											invalidFeedback={
												formik.errors.description
											}
											isValid={formik.isValid}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											onFocus={() => {
												formik.setErrors({});
											}} className=''

										/>
									</FormGroup>
								</div>
								<div className='cold-md-12'>
									<div className=' d-flex justify-content-end'>

										<Button
											type='submit'
											color='primary'

										>
											Create
										</Button>
									</div>
								</div>

							</form>
						</Spin>
					</CardBody>
				</Card>
			</div>
		</PageWrapper>
	)
}
