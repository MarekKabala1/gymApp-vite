import { Link, Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import layoutCSS from '@@/layout.module.css';

const Layout = () => {
	return (
		<>
			<header className={layoutCSS.header}>
				<Link to={'/'}>
					<Logo className={layoutCSS.header__logo} />
				</Link>
				<nav className={layoutCSS.header__nav}>
					<div className='btn btn--small'>
						<Link className={layoutCSS.header__btn_link} to={'/login'}>
							<AiOutlineLogin />
							LogIn
						</Link>
					</div>
					<div className='btn btn--small'>
						<Link className={layoutCSS.header__btn_link} to={'/signUp'}>
							<AiOutlineUserAdd />
							signUp
						</Link>
					</div>
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
