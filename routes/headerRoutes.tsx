import React from 'react';
import { componentPagesMenu, dashboardPagesMenu, demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DashboardBookingHeader from '../pages/_layout/_headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
import SummaryHeader from '../pages/_layout/_headers/SummaryHeader';
import ProductsHeader from '../pages/_layout/_headers/ProductsHeader';
import ProductListHeader from '../pages/_layout/_headers/ProductListHeader';
import PageLayoutHeader from '../pages/_layout/_headers/PageLayoutHeader';
import ComponentsHeader from '../pages/_layout/_headers/ComponentsHeader';
import FormHeader from '../pages/_layout/_headers/FormHeader';
import ChartsHeader from '../pages/_layout/_headers/ChartsHeader';
import ContentHeader from '../pages/_layout/_headers/ContentHeader';
import UtilitiesHeader from '../pages/_layout/_headers/UtilitiesHeader';
import IconHeader from '../pages/_layout/_headers/IconHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers = [
	{
		path: `/auth/*`,
		element: null,
	},

	
	{
		path: `/*`,
		element: <DefaultHeader />,
	},
];

export default headers;
