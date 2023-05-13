import React, { Component } from 'react';
import {
	createBrowserRouter,
	Route,
	Router,
	RouterProps,
	RouterProvider,
} from 'react-router-dom';

import { AuthenticationGuard } from '@/auth0/AuthGuard';
import { useAuth0 } from '@auth0/auth0-react';

import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/layouts/Layout';
import AuthLayout from '@/layouts/AuthLayout';
import Hero from '@/components/Hero';
import UserDataForm, { userDataFormAction } from '@/components/UserDataForm';

import Dashboard from '@/pages/Dashboard';
import Callback from '@/pages/Callback';
import Loading from '@/pages/Loading';
import { fetchUserDataAfterLoggingInAuth0 } from '@/helpers/LoaderFnc';

const Routs = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}
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
			],
		},
		{
			path: '/dashboard',
			element: <AuthenticationGuard component={AuthLayout} />,
			errorElement: <ErrorBoundary />,
			children: [
				{
					path: '/dashboard',
					element: <Dashboard />,
				},
				{
					path: '/dashboard/form',
					element: <UserDataForm />,
					action: userDataFormAction,
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default Routs;
