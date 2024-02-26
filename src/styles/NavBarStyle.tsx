import styled, { ExecutionContext, css } from 'styled-components';
import { device } from './breakpoints';
import { FastOmit } from 'styled-components/dist/types';
//import { device } from './breakpoints';

export const sharedButtonProperties = css`
	width: fit-content;
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
`;

export const NavBarContainer = styled.nav`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(12, 1fr);
	position: absolute;
	top: 0;
	height: 3rem;
	width: 100vw;
	border-radius: 0.3rem;
	/*border-bottom: 2px solid ${(props) => props.theme.borderColor};*/
	background-color: ${(props) => props.theme.cardBgColor};

	.dropdownContainer {
		grid-column-start: 2;
		&:hover {
			.dropdownContent {
				display: block;
			}
		}
	}
	.dropdownButton {
		${sharedButtonProperties};
		font-size: 0.8rem;
		font-weight: 600;
	}
	.dropdownContent {
		display: none;
		position: absolute;
		background-color: ${(props) => props.theme.cardBgColor};
		min-height: fit-content;
		min-width: 8rem;
		border-radius: 1rem;
		overflow: hidden;
		font-size: 0.8rem;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		a {
			display: block;
			text-decoration: none;
			color: ${(props) => props.theme.fontColor};
			padding-top: 1rem;
			padding-left: 1rem;
			height: 2rem;
			&:hover {
				background-color: ${(props) => props.theme.borderColor};
				color: #fff;
			}
		}
	}

	.material-symbols-outlined {
		grid-column-start: 12;
		${sharedButtonProperties}
	}

	.title {
		color: ${(props) => props.theme.fontColor};
		grid-column-start: 4;
		grid-column-end: 10;
		text-align: center;
		text-decoration: none;
		margin: 0;
		font-size: 0.7rem;
		font-weight: 500;
	}

	@media ${device.sm} {
		.dropdownButton,
		.dropdownContent,
		.title {
			font-size: 1rem;
		}
	}
`;
