'use client'
import React from 'react';
import { ThemeProvider } from 'react-jss';
import { ToastContainer } from 'react-toastify';
import { TourProvider } from '@reactour/tour';
import { ReactNotifications } from 'react-notifications-component';
import { appWithTranslation } from 'next-i18next';
import { AuthContextProvider } from '../../context/authContext';
import { ThemeContextProvider } from '../../context/themeContext';
import useDarkMode from '../../hooks/useDarkMode';
import COLORS from '../../common/data/enumColors';
import { getOS } from '../../helpers/helpers';
import steps, { styles } from '../../steps';
import Portal from '../../layout/Portal/Portal';
import Wrapper from '../../layout/Wrapper/Wrapper';
import App from '../../layout/App/App';
import AsideRoutes from '../../layout/Aside/AsideRoutes';
import { ToastCloseButton } from '../../components/bootstrap/Toasts';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  getOS();

	/**
	 * Dark Mode
	 */
	const { themeStatus } = useDarkMode();
	const theme = {
		theme: themeStatus,
		primary: COLORS.PRIMARY.code,
		secondary: COLORS.SECONDARY.code,
		success: COLORS.SUCCESS.code,
		info: COLORS.INFO.code,
		warning: COLORS.WARNING.code,
		danger: COLORS.DANGER.code,
		dark: COLORS.DARK.code,
		light: COLORS.LIGHT.code,
	};
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <AuthContextProvider>
			<ThemeContextProvider>
				<ThemeProvider theme={theme}>
					<TourProvider
						steps={steps}
						styles={styles}
						showNavigation={false}
						showBadge={false}>
						<App>
							<AsideRoutes />
							<Wrapper>
                {children}

							</Wrapper>
						</App>``
						<Portal id='portal-notification'>
							<ReactNotifications />
						</Portal>
						<ToastContainer
							closeButton={ToastCloseButton}
							toastClassName='toast show'
						/>
					</TourProvider>
				</ThemeProvider>
			</ThemeContextProvider>
		</AuthContextProvider>
        </body>
    </html>
  )
}