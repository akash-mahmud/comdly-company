import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import ReactGA from 'react-ga4';
import { GetStaticProps } from 'next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import {
	componentPagesMenu,
	dashboardPagesMenu,
	demoPagesMenu,
	pageLayoutTypesPagesMenu,
} from '../../../menu';
import ThemeContext from '../../../context/themeContext';
import Card, { CardBody } from '../../../components/bootstrap/Card';

import Hand from '../../../assets/img/hand.png';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const [doc, setDoc] = useState(
		(typeof window !== 'undefined' &&
			localStorage.getItem('facit_asideDocStatus') === 'true') ||
			false,
	);

	const { t } = useTranslation(['common', 'menu']);

	const { darkModeStatus } = useDarkMode();

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={dashboardPagesMenu} id='aside-dashboard' />
			
						<NavigationLine />
						<Navigation menu={demoPagesMenu} id='aside-demo-pages' />
						<NavigationLine />
						<Navigation menu={pageLayoutTypesPagesMenu} id='aside-menu' />
					
			

			

				
			</AsideBody>
			
		</Aside>
	);
};



export default DefaultAside;
