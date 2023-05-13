import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import dashboardCSS from '@@/dashboard.module.css';
import LogOutButton from '@/components/LogOutButton';
import { GetUserData } from '@/types/Types';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
	const { user, isAuthenticated, isLoading }: GetUserData = useAuth0();
	const toastId = 'Toast.Dashboard.authenticated';

	!isLoading && isAuthenticated
		? toast(`Hi ${user?.name} U are logged in`, { toastId: toastId })
		: '';

	if (user?.name === user?.email) {
		return (
			<>
				{isAuthenticated && (
					<nav className={dashboardCSS.navWrapper}>
						<div className={dashboardCSS.avatar_wrapper}>
							<img src={user?.picture} className={dashboardCSS.avatar} />
							<p className={dashboardCSS.avatar_text}>{user?.name}</p>
						</div>
						<div>
							<NavLink className={dashboardCSS.link} to={'/dashboard/form'}>
								Add your info
							</NavLink>
							<LogOutButton />
						</div>
					</nav>
				)}
			</>
		);
	} else {
		return (
			<>
				{isAuthenticated && (
					<nav className={dashboardCSS.navWrapper}>
						<div>
							<img src={user?.picture} className={dashboardCSS.avatar} />
							<p>{user?.name}</p>
							<p>{user?.email}</p>
						</div>
						<div>
							<LogOutButton />
						</div>
					</nav>
				)}
			</>
		);
	}
};
export default DashboardNav;
