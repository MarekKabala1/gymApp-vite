import layoutCSS from '@@/layout.module.css';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '@/pages/Loading';
import MobileFooterNav from '@/components/MobileFooterNav';

const DashboardNavLazy = lazy(() => import('../components/DashboardNav'));

const AuthLayout = () => {
	return (
		<>
			<header className={layoutCSS.header}>
				<Suspense fallback={<Loading />}>
					<DashboardNavLazy />
				</Suspense>
			</header>
			<main className={layoutCSS.main}>
				<Outlet />
			</main>
			<footer className={layoutCSS.footer}>
				<MobileFooterNav />
			</footer>
		</>
	);
};
export default AuthLayout;
