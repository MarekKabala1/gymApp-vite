import { Link } from 'react-router-dom';
import Logo from './Logo';
import '@@/error.css';

export const Error = () => {
	return (
		<main className='error'>
			<Link to='/'>
				<Logo />
			</Link>
			<p className='error__text'>
				Sorry something went wrong go back to the home page.
				<br />
				<Link className='error__link' to={'/'}>
					<span className='error__link-span'>Go back to home page</span>
				</Link>
			</p>
		</main>
	);
};
