import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import dashboardCSS from '@@/dashboard.module.css';

export interface UserMetadata {
	[propName: string]: any;
}

export interface AppMetadata {
	[propName: string]: any;
}

export interface Identity {
	connection: string;
	user_id: string;
	provider: string;
	isSocial: boolean;
	access_token?: string | undefined;
	profileData?:
		| {
				email?: string | undefined;
				email_verified?: boolean | undefined;
				name?: string | undefined;
				phone_number?: string | undefined;
				phone_verified?: boolean | undefined;
				request_language?: string | undefined;
				sub?: string | undefined;
		  }
		| undefined;
}

interface User<A = AppMetadata, U = UserMetadata> {
	email?: string | undefined;
	email_verified?: boolean | undefined;
	username?: string | undefined;
	phone_number?: string | undefined;
	phone_verified?: boolean | undefined;
	user_id?: string | undefined;
	_id?: string | undefined;
	sub?: string | undefined;
	created_at?: string | undefined;
	updated_at?: string | undefined;
	identities?: Identity[] | undefined;
	app_metadata?: A | undefined;
	user_metadata?: U | undefined;
	picture?: string | undefined;
	name?: string | undefined;
	nickname?: string | undefined;
	multifactor?: string[] | undefined;
	last_ip?: string | undefined;
	last_login?: string | undefined;
	last_password_reset?: string | undefined;
	logins_count?: number | undefined;
	blocked?: boolean | undefined;
	given_name?: string | undefined;
	family_name?: string | undefined;
}
interface GetUserData {
	user?: User<AppMetadata, UserMetadata>;
	isAuthenticated: boolean;
	isLoading: boolean;
}
const Dashboard = () => {
	const { user, isAuthenticated, isLoading }: GetUserData = useAuth0();
	console.log(user);

	const toastId = 'Toast.Dashboard.authenticated';

	!isLoading && isAuthenticated
		? toast(`Hi ${user?.name} U are logged in`, { toastId: toastId })
		: '';
	if (user?.name === user?.email) {
		return (
			<>
				{isAuthenticated && (
					<section>
						<h2>{user?.name}</h2>
						<p>{user?.sub}</p>
						<img src={user?.picture} className={dashboardCSS.avatar} />
					</section>
				)}
			</>
		);
	} else {
		return (
			<>
				{isAuthenticated && (
					<section>
						<h2>{user?.name}</h2>
						<h3>{user?.email}</h3>
						<p>{user?.sub}</p>
						<img src={user?.picture} className={dashboardCSS.avatar} />
					</section>
				)}
			</>
		);
	}
};
export default Dashboard;
