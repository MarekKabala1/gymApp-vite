import { Component } from 'react';

interface ErrorBoundaryProps {
	children?: JSX.Element | JSX.Element[] | React.ReactNode;
}
interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<p className='errorBoundary'>UPS.Something went wrong.</p>
					<p className='errorBoundary'>Refresh Page</p>
				</>
			);
		}

		return this.props.children;
	}
}
export default ErrorBoundary;
