import Logo from '@/components/Logo';
import LogInButton from '@/components/LogInButton';
import LogOutButton from '@/components/LogOutButton';
import SignUpButton from '@/components/SignUpButton';

import layoutCSS from '@@/layout.module.css';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = () => {
	const navigate = useNavigate();
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		const authenticated =
			isAuthenticated && user ? navigate('dashboard') : navigate('/');
		return authenticated;
	}, [isAuthenticated]);

	return (
		<>
			<header className={layoutCSS.header}>
				<Link className={layoutCSS.logo_link} to={'/'}>
					<Logo className={layoutCSS.logo} aria-label='none' />
				</Link>
				<nav className={layoutCSS.nav}>
					<LogInButton />
					<LogOutButton />
					<SignUpButton />
				</nav>
			</header>
			<main className={layoutCSS.main}>
				<Outlet />
			</main>
			<footer className={layoutCSS.footer}>
				<p className={layoutCSS.footer__text}>All rights reserved GymBaddy4U</p>
			</footer>
		</>
	);
};

export default Layout;
