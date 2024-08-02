import React, { forwardRef, ReactElement, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ISubHeaderProps } from '../SubHeader/SubHeader';
import { IPageProps } from '../Page/Page';
import AuthContext from '../../context/authContext';
import Mounted from '../../components/Mounted';
import { useRouter } from 'next/router';
import { demoPagesMenu } from '../../menu';
import Spinner from '../../components/bootstrap/Spinner';
import useMounted from '../../hooks/useMounted';

interface IPageWrapperProps {
	isProtected?: boolean;
	children:
		| ReactElement<ISubHeaderProps>[]
		| ReactElement<IPageProps>
		| ReactElement<IPageProps>[];
	className?: string;
}
const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
	({ isProtected = true, className, children }, ref) => {
		const { loading, isAuthorized } = useContext(AuthContext);
		const mounted = useMounted();

const router = useRouter()


		

		useEffect(() => {
			
			if ((!isAuthorized && !loading) && isProtected) {
				
				router.push("/auth/login")
				// navigate(`../${demoPages.login.path}`);
			}
			return () => {};
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [router , isAuthorized, loading]);

if (loading) {
	<Spinner/>
}	

return (
	<>
	
	
			<div ref={ref} className={classNames('page-wrapper', 'container-fluid', className)}>
				<Mounted>
			    { mounted && !isProtected && !loading
				
				
				?children :
				mounted && isProtected && isAuthorized && !loading? children:
				
				null
				
				
				}

					
					
					</Mounted>
			</div>
	</>
		);
	},
);
PageWrapper.displayName = 'PageWrapper';
PageWrapper.propTypes = {
	isProtected: PropTypes.bool,
	// @ts-ignore
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default PageWrapper;

