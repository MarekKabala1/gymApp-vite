import loginCSS from '@@/login.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';

const Login = () => {
	const [visible, setVisible] = useState<boolean>(false);

	const visiblePassword = () => {
		setVisible(!visible);
	};

	return (
		<form className={loginCSS.wrapper}>
			<h2 className={loginCSS.header}>Login</h2>
			<input
				className={loginCSS.input}
				type='text'
				name='email'
				placeholder='Email Address'
				required
			/>
			<input
				className={`${loginCSS.input} ${loginCSS.input_position}`}
				type={visible ? 'text' : 'password'}
				name='password'
				placeholder='Password'
				required
			/>
			<div className={loginCSS.btn_wrapper}>
				<button className={`btn ${loginCSS.btn}`}>LogIn</button>
				<Link className={loginCSS.resetPassword} to='/resetPassword'>
					Forgot Password?
				</Link>
			</div>
			<span onClick={visiblePassword} className={loginCSS.eye}>
				{visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
			</span>
		</form>
	);
};

export default Login;
