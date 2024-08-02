import React, { useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Calendar as DatePicker } from 'react-date-range';
import dayjs from 'dayjs';
import CommonUpcomingEvents from '@/common/partial/CommonUpcomingEvents';
import Popovers from '@/components/bootstrap/Popovers';
import Icon from '@/components/icon/Icon';
import useDarkMode from '@/hooks/useDarkMode';
import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '@/layout/SubHeader/SubHeader';
import { demoPagesMenu } from '@/menu';
import { Button } from 'antd';
import BookingsTable from '@/components/booking/BookingsTable';


const Index: NextPage = () => {
	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

	return (
		<PageWrapper>
		
		
			<Page container='fluid'>
				<BookingsTable isFluid />
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
