import { Link, Outlet } from 'react-router-dom';
import '../css/layout.css';
import '../index.css';
import Logo from './Logo';

const Layout = () => {
	return (
		<>
			<header className='header'>
				<Link to={'/'}>
					<Logo className='header__logo' />
				</Link>
				<nav className='header__nav'>
					<Link className='btn header__btn' to={'/login'}>
						LogIn
					</Link>
					<Link className='btn header__btn' to={'/register'}>
						signUp
					</Link>
				</nav>
			</header>
			<main className='main'>
				<Outlet />
			</main>
			<footer className='footer'>
				<p className='footer__text'>All rights reserved GymBaddy4U</p>
			</footer>
		</>
	);
};

export default Layout;
