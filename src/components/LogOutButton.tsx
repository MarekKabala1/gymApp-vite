import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import buttonCSS from '@@/button.module.css';

const LogOutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	const handelLogOut = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		});
	};
	return (
		<>
			{isAuthenticated && (
				<button className='btn btn--small' onClick={handelLogOut}>
					<span className={buttonCSS.btn_link}>
						<AiOutlineUserAdd />
						LogOut
					</span>
				</button>
			)}
		</>
	);
};
export default LogOutButton;
