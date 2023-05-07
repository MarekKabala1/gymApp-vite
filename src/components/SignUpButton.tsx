import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import buttonCSS from '@@/button.module.css';
import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	const handleRegister = async () => {
		await loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } });
	};
	return (
		<>
			{!isAuthenticated && (
				<button className='btn btn--small' onClick={handleRegister}>
					<span className={buttonCSS.btn_link}>
						<AiOutlineUserAdd />
						Register
					</span>
				</button>
			)}
		</>
	);
};

export default SignUpButton;
