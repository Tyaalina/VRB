import React, { ReactElement } from 'react';
import { Message } from 'semantic-ui-react';

interface IFormMessageProps {
	isError?: boolean;
	isSuccess?: boolean;
	children?: React.ReactNode;
}

export const FormMessageWrapper = ({ children, isError, isSuccess }: IFormMessageProps): ReactElement | null => {
	if (children) {
		return <Message negative={isError} success={isSuccess} content={children} />;
	}

	return null;
}
