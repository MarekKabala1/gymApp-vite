import registerCSS from '@@/register.module.css';
import { Link } from 'react-router-dom';
const signUp = () => {
	return (
		<form className={registerCSS.wrapper}>
			<h2 className={registerCSS.header}>Register User</h2>
			<input
				className={registerCSS.input}
				name='name'
				placeholder='Full Name'
				type='text'
				required
			/>
			<input
				className={registerCSS.input}
				type='text'
				name='email'
				placeholder='Email Address'
				required
			/>
			<input
				className={registerCSS.input}
				// type={visible ? 'text' : 'password'}
				name='password'
				placeholder='Password'
				required
			/>
			<input
				className={registerCSS.input}
				// type={visible ? 'text' : 'password'}
				name='RepeatPassword'
				placeholder='Repeat Password'
				required
			/>
			<div className={registerCSS.btn_wrapper}>
				<button className={`btn ${registerCSS.btn}`} type='submit'>
					LogIn
				</button>
				<Link className={registerCSS.logIn_link} to='/resetPassword'>
					LogIn
				</Link>
			</div>
		</form>
	);
};

export default signUp;
