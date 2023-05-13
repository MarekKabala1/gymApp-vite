import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../index.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN || '';
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID || '';
const redirectUri =
	import.meta.env.VITE_APP_CALLBACK_URL || window.location.origin;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<Auth0Provider
				domain={domain}
				clientId={clientId}
				authorizationParams={{ redirect_uri: redirectUri }}>
				<App />
			</Auth0Provider>
		</ErrorBoundary>
	</React.StrictMode>
);
