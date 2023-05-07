import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineLogin } from 'react-icons/ai';
import buttonCSS from '@@/button.module.css';
import { useNavigate } from 'react-router-dom';

const LogInButton: React.FC = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const handelLogIn = async () => {
		try {
			await loginWithRedirect({
				appState: { returnTo: '/dashboard' },
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			{!isAuthenticated && (
				<button className='btn btn--small' onClick={handelLogIn}>
					<span className={buttonCSS.btn_link}>
						<AiOutlineLogin />
						LogIn
					</span>
				</button>
			)}
		</>
	);
};

export default LogInButton;
