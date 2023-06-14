import React from 'react';
import { usePathname } from 'next/navigation';
import asides from '../../routes/asideRoutes';
import { pathToRoute } from '../../helpers/helpers';
import Mounted from '../../components/Mounted';

const AsideRoutes = () => {
	const path = usePathname();

	const PAGE = asides.find((key) => {
		return key.path.substring(key.path?.length - 2) === '/*'
			? path?.includes(key.path.substring(0, key.path?.length - 2))
			: key.path === pathToRoute(path as string);
	});

	if (PAGE) return <Mounted>{PAGE?.element}</Mounted>;
	return null;
};

export default AsideRoutes;
