import React from 'react';
import { usePathname } from 'next/navigation';
import footers from '../../routes/footerRoutes';
import { pathToRoute } from '../../helpers/helpers';
import Mounted from '../../components/Mounted';

const FooterRoutes = () => {
	const path = usePathname();

	const PAGE = footers.find((key) => {
		return key.path.substring(key.path?.length - 2) === '/*'
			? path?.includes(key.path.substring(0, key.path?.length - 2))
			: key.path === pathToRoute(path as string);
	});

	if (PAGE) return <Mounted>{PAGE?.element}</Mounted>;
	return null;
};

export default FooterRoutes;
