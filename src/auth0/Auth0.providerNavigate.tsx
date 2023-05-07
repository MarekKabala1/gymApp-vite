import { AppState, Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthProviderNavigateType {
	children?: React.ReactNode;
}

const Auth0ProviderNavigate = ({
	children,
}: PropsWithChildren<AuthProviderNavigateType>): JSX.Element | null => {
	const navigate = useNavigate();

	const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN || '';
	const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID || '';
	const redirectUri = import.meta.env.VITE_APP_CALLBACK_URL || '';

	const onRedirectCallback = (appState?: AppState) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	// if (!(domain && clientId && redirectUri)) {
	// 	return null;
	// }

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			onRedirectCallback={onRedirectCallback}>
			{children}
		</Auth0Provider>
	);
};
export default Auth0ProviderNavigate;
