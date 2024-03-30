import React from 'react';

import { ExecutionContext, css } from 'styled-components';
import { FastOmit } from 'styled-components/dist/types';

export const sharedButtonProperties = css`
	background-color: ${(
		props: ExecutionContext &
			FastOmit<
				React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
				never
			>
	) => props.theme.cardBgColor};
	color: ${(
		props: ExecutionContext &
			FastOmit<
				React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
				never
			>
	) => props.theme.fontColor};
	border: none;
	height: 2rem;
	border-radius: 0.4rem;
	cursor: pointer;
`;
