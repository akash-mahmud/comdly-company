'use client'
import React, { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTour } from '@reactour/tour';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import CommonAvatarTeam from '../../common/partial/other/CommonAvatarTeam';
import ThemeContext from '../../context/themeContext';
import useDarkMode from '../../hooks/useDarkMode';
import { TABS, TTabs } from '../../common/type/helper';
import Page from '../../layout/Page/Page';


const Index: NextPage = () => {
	const { mobileDesign } = useContext(ThemeContext);
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('tourModalStarted') !== 'shown' &&
			!mobileDesign
		) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => { };
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { themeStatus } = useDarkMode();

	const [activeTab, setActiveTab] = useState<TTabs>(TABS.YEARLY);

	return (
		<PageWrapper>
			<Head>
				{/* <title>{demoPagesMenu.sales.subMenu.dashboard.text}</title> */}
			</Head>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Overview</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
			
			</Page>
		</PageWrapper>
	);
};


export default Index;
