import { Link, Outlet } from 'react-router-dom';
import '@@/layout.css';
import Logo from '@/components/Logo';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';

const Layout = () => {
	return (
		<>
			<header className='header'>
				<Link to={'/'}>
					<Logo className='header__logo' />
				</Link>
				<nav className='header__nav'>
					<div className='btn btn--small'>
						<Link className='header__btn--link' to={'/login'}>
							<AiOutlineLogin />
							LogIn
						</Link>
					</div>
					<div className='btn btn--small'>
						<Link className='header__btn--link' to={'/signUp'}>
							<AiOutlineUserAdd />
							signUp
						</Link>
					</div>
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
