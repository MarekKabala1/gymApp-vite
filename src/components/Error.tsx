import { Link } from 'react-router-dom';
import Logo from './Logo';
import errorCSS from '@@/error.module.css';

export const Error = () => {
	return (
		<main className={errorCSS.error}>
			<Link className={errorCSS.logo_link} aria-hidden='true' to='/'>
				<Logo />
			</Link>
			<p className={errorCSS.text}>
				Sorry something went wrong go back to the home page.
				<br />
				<Link className={errorCSS.link} to={'/'}>
					<span className={errorCSS.span_link}>Go back to the home page</span>
				</Link>
			</p>
		</main>
	);
};
