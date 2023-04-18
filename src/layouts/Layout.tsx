import { Link, Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import layoutCSS from '@@/layout.module.css';

const Layout = () => {
	return (
		<>
			<header className={layoutCSS.header}>
				<Link
					className={layoutCSS.link}
					aria-label='Logo you are in home page'
					to={'/'}>
					<Logo className={layoutCSS.logo} aria-label='none' />
				</Link>
				<nav className={layoutCSS.nav}>
					<div className='btn btn--small'>
						<Link className={layoutCSS.btn_link} to={'/login'}>
							<AiOutlineLogin />
							LogIn
						</Link>
					</div>
					<div className='btn btn--small'>
						<Link
							className={layoutCSS.btn_link}
							aria-label='sign up'
							to={'/signUp'}>
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
