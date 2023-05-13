import { fetchUserDataAfterLoggingInAuth0 } from '@/helpers/LoaderFnc';
import { DbUserData, GetUserData } from '@/types/Types';

const Dashboard = () => {
	const user = fetchUserDataAfterLoggingInAuth0();
	const userData = user.user;
	console.log(user);
	return (
		<>
			<h1>{userData?.name}</h1>
		</>
	);
};

export default Dashboard;
