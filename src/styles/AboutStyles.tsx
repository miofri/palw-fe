import styled from 'styled-components';
import { device } from './breakpoints';

export const Container = styled.div`
	width: 15rem;
	height: 25rem;
	padding: 2rem;
	overflow-y: scroll;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.fontColor};
	position: relative; /* Ensure the container is a positioned parent for absolute positioning */
	border-radius: 1rem;
	font-size: 0.8rem;
	hr {
		opacity: 20%;
	}
	footer {
		width: fit-content;
		height: fit-content;
		position: absolute;
		bottom: 0.5rem;
		left: 0;
		margin: 0;
		opacity: 70%;
		text-align: center;
	}

	@media ${device.sm} {
		width: 30rem;
		height: 30rem;
		font-size: 1rem;
		padding: 4rem;
		footer {
			bottom: 2rem;
			width: 100%;
		}
	}
`;
