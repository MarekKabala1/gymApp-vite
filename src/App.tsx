import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/ErrorBoundary';

import Layout from '@/layouts/Layout';
import Hero from '@/components/Hero';
import Dashboard from '@/pages/Dashboard';

import 'react-toastify/dist/ReactToastify.css';
import { AuthenticationGuard } from './auth0/AuthGuard';
import Callback from './pages/Callback';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './pages/Loading';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Hero />,
			},
			{
				path: 'callback',
				element: <Callback />,
			},
			{
				path: 'dashboard',
				element: <AuthenticationGuard component={Dashboard} />,
			},
		],
	},
]);

const App: React.FC = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer
				position='top-right'
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
};

export default App;
