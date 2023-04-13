import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from '@/components/Error';
import Layout from '@/layouts/Layout';
import SignUp from '@/components/SignUp';
import Login from './components/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: 'signUp',
				element: <SignUp />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
