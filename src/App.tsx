import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from '@/components/Error';
import Layout from '@/layouts/layouts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
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
