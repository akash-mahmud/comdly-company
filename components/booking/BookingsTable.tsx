import React, { FC, useContext, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { FormikHelpers, useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../bootstrap/Card';
import Button from '../bootstrap/Button';
import { priceFormat } from '../../helpers/helpers';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../bootstrap/Dropdown';
import Icon from '../icon/Icon';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../bootstrap/OffCanvas';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import Textarea from '../bootstrap/forms/Textarea';
import Checks from '../bootstrap/forms/Checks';
import Popovers from '../bootstrap/Popovers';

import Avatar from '../Avatar';
import PaginationButtons, { dataPagination, PER_COUNT } from '../PaginationButtons';
import useDarkMode from '../../hooks/useDarkMode';
import USERS from '@/common/data/userDummyData';
import data from '@/common/data/dummyEventsData';
import EVENT_STATUS from '@/common/data/enumEventStatus';
import { BookingStatus, useBookingsQuery } from '@/graphql/generated/schema'
import AuthContext from '@/context/authContext';
interface IBookingsTableProps {
	isFluid?: boolean;
}
const BookingsTable: FC<IBookingsTableProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	// BEGIN :: Upcoming Events
	const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	const handleUpcomingDetails = () => {
		setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	};

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const handleUpcomingEdit = () => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
	// END :: Upcoming Events

	const formik = useFormik({
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			return undefined;
		},
		initialValues: {
			customerName: 'Alison Berry',
			service: 'Exercise Bike',
			employee: `${USERS.GRACE.name} ${USERS.GRACE.surname}`,
			location: 'Maryland',
			date: dayjs().add(1, 'days').format('YYYY-MM-DD'),
			time: '10:30',
			note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisi odio. Nam sit amet pharetra enim. Nulla facilisi. Nunc dictum felis id massa mattis pretium. Mauris at blandit orci. Nunc vulputate vulputate turpis vitae cursus. In sit amet turpis tincidunt, interdum ex vitae, sollicitudin massa. Maecenas eget dui molestie, ullamcorper ante vel, tincidunt nisi. Donec vitae pulvinar risus. In ultricies nisl ac massa malesuada, vel tempus neque placerat.',
			notify: true,
		},
	});
	const { user } = useContext(AuthContext)
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	// const { items, requestSort, getClassNamesFor } = useSortableData(data);

	const { data } = useBookingsQuery({
		variables: {
			where: {
				companyId: {
					equals: user?.company?.id
				}
			}
		}
	})
	const bookings = data?.bookings ?? []


	return (
		<>
			<Card stretch={isFluid}>

				<CardBody className='table-responsive' isScrollable={isFluid}>
					<table className='table table-modern'>
						<thead>
							<tr>
								<td style={{ width: 60 }} />
								<th
									// onClick={() => requestSort('date')}
									className='cursor-pointer text-decoration-underline'>
									Date / Time{' '}
									<Icon
										size='lg'
										// className={getClassNamesFor('date')}
										icon='FilterList'
									/>
								</th>
								<th>Customer</th>

								<th>Status</th>
								<td />
							</tr>
						</thead>
						<tbody>
							{bookings.map((item) => (
								<tr key={item.id}>
									<td>
										<Button
											isOutline={!darkModeStatus}
											color='dark'
											isLight={darkModeStatus}
											className={classNames({
												'border-light': !darkModeStatus,
											})}
											icon='Info'
											onClick={handleUpcomingDetails}
											aria-label='Detailed information'
										/>
									</td>
									<td>
										<div className='d-flex align-items-center'>
											<span
												className={classNames(
													'badge',
													'border border-2',
													[`border-${themeStatus}`],
													'rounded-circle',
													'bg-success',
													'p-2 me-2',
													// `bg-${item.status.color}`,
												)}>
												<span className='visually-hidden'>
													{item.status}
												</span>
											</span>
											<span className='text-nowrap'>
												{dayjs(item.bookingDate).format(
													'MMM D YYYY',
												)}, {dayjs(item.bookingTime).format(
													'h:mm a',
												)}

											</span>
										</div>
									</td>
									<td>
										<div>
											<div>{item.user.firstname} {item.user.lastname}</div>
											<div className='small text-muted'>
												{item.user.email}
											</div>
										</div>
									</td>


									<td>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button
													isLink
													color={item.status.color}
													icon='Circle'
													className='text-nowrap'>
													{item.status}
												</Button>
											</DropdownToggle>
											<DropdownMenu>
												{Object.keys(BookingStatus).map((key) => (
													<DropdownItem key={key}>
														<div>
															<Icon
																icon='Circle'
															// color={EVENT_STATUS[key].color}
															/>
															{BookingStatus[key]}
														</div>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</td>

								</tr>
							))}
						</tbody>
					</table>
				</CardBody>

			</Card>

			<OffCanvas
				setOpen={setUpcomingEventsInfoOffcanvas}
				isOpen={upcomingEventsInfoOffcanvas}
				titleId='upcomingDetails'
				placement='bottom'>
				<OffCanvasHeader setOpen={setUpcomingEventsInfoOffcanvas}>
					<OffCanvasTitle id='upcomingDetails'>Customer: Alison Berry</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<div className='row g-4'>
						<div className='col-lg-6'>
							<FormGroup
								id='dateInfo'
								name='date'
								label='Date/Time'
								isColForLabel
								labelClassName='col-sm-2 text-capitalize'
								childWrapperClassName='col-sm-10'>
								<Input
									// value={dayjs(
									// 	// @ts-ignore
									// 	`${data.find((e) => e.id === 1).date} ${
									// 		// @ts-ignore
									// 		data.find((e) => e.id === 1).time
									// 	}`,
									// ).format('MMM Do YYYY, h:mm a')}
									readOnly
									disabled
								/>
							</FormGroup>
						</div>
						<div className='w-100' />
						<div className='col-lg-6'>
							<FormGroup
								id='noteInfo'
								name='note'
								label='Note'
								isColForLabel
								labelClassName='col-sm-2 text-capitalize'
								childWrapperClassName='col-sm-10'>
								<Textarea value={formik.values.note} readOnly disabled />
							</FormGroup>
						</div>
					</div>
				</OffCanvasBody>
			</OffCanvas>

			<OffCanvas
				setOpen={setUpcomingEventsEditOffcanvas}
				isOpen={upcomingEventsEditOffcanvas}
				titleId='upcomingEdit'
				isBodyScroll
				placement='end'>
				<OffCanvasHeader setOpen={setUpcomingEventsEditOffcanvas}>
					<OffCanvasTitle id='upcomingEdit'>Edit Appointments</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='customerName' label='Customer'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.customerName}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='service' label='Service'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.service}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='employee' label='Employee'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.employee}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='location' label='Location'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.location}
								/>
							</FormGroup>
						</div>
						<div className='col-6'>
							<FormGroup id='date' label='Date'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.date}
									type='date'
								/>
							</FormGroup>
						</div>
						<div className='col-6'>
							<FormGroup id='time' label='time'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.time}
									type='time'
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<Card isCompact borderSize={2} shadow='none' className='mb-0'>
								<CardHeader>
									<CardLabel>
										<CardTitle>Extras</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<FormGroup id='note' label='Note'>
										<Textarea
											onChange={formik.handleChange}
											value={formik.values.note}
										/>
									</FormGroup>
								</CardBody>
							</Card>
						</div>
						<div className='col-12'>
							<Card isCompact borderSize={2} shadow='none' className='mb-0'>
								<CardHeader>
									<CardLabel>
										<CardTitle>Notification</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody>
									<FormGroup>
										<Checks
											id='notify'
											type='switch'
											label={
												<>
													Notify the Customer
													<Popovers
														trigger='hover'
														desc='Check this checkbox if you want your customer to receive an email about the scheduled appointment'>
														<Icon
															icon='Help'
															size='lg'
															className='ms-1 cursor-help'
														/>
													</Popovers>
												</>
											}
											onChange={formik.handleChange}
											checked={formik.values.notify}
										/>
									</FormGroup>
								</CardBody>
							</Card>
						</div>
					</div>
				</OffCanvasBody>
				<div className='row m-0'>
					<div className='col-12 p-3'>
						<Button
							color='info'
							className='w-100'
							onClick={() => setUpcomingEventsEditOffcanvas(false)}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>
		</>
	);
};

export default BookingsTable;
