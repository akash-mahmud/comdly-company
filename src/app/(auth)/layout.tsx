import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import { pageLayoutTypesPagesMenu } from '@/menu';
import Page from '@/layout/Page/Page';

const Index = ({
	children,
  }: {
	children: React.ReactNode
  }) => {
	return (
		<PageWrapper>
			<Head>
				<title>{pageLayoutTypesPagesMenu.blank.text}</title>
			</Head>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					{children}
				</div>
			</Page>
		</PageWrapper>
	);
};



export default Index;
