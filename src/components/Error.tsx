import { Link } from 'react-router-dom';
import Logo from './Logo';
import errorCSS from '@@/error.module.css';

export const Error = () => {
	return (
		<main className={errorCSS.error}>
			<Link
				className={errorCSS.logo_link}
				aria-label='Go back to home page'
				to='/'>
				<Logo />
			</Link>
			<p className={errorCSS.text}>
				Sorry something went wrong go back to the home page.
				<br />
				<Link
					className={errorCSS.link}
					aria-label='Go back to home page'
					to={'/'}>
					<span className={errorCSS.span_link}>Go back to home page</span>
				</Link>
			</p>
		</main>
	);
};
