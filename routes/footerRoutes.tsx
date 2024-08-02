import React from 'react';
import { demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers = [
	{ path: demoPagesMenu.login.path, element: null, exact: true },
	{ path: demoPagesMenu.register.path, element: null, exact: true },

	{ path: '/*', element: <DefaultFooter />, exact: true },
];

export default footers;
