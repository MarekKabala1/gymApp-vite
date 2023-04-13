import { Link } from 'react-router-dom';
import Logo from './Logo';
import errorCSS from '@@/error.module.css';

export const Error = () => {
	return (
		<main className={errorCSS.error}>
			<Link to='/'>
				<Logo />
			</Link>
			<p className={errorCSS.error__text}>
				Sorry something went wrong go back to the home page.
				<br />
				<Link className={errorCSS.error__link} to={'/'}>
					<span className={errorCSS.error__link}>Go back to home page</span>
				</Link>
			</p>
		</main>
	);
};
