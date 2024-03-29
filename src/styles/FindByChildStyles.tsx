import { sharedButtonProperties } from './Shared';
import styled from 'styled-components';
import { device } from './breakpoints';

export const Container = styled.div`
	width: 12rem;
	height: 25rem;
	padding: 2rem;
	overflow-x: wrap;
	overflow-y: scroll;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.fontColor};
	position: relative; /* Ensure the container is a positioned parent for absolute positioning */
	border-radius: 1rem;
	font-size: 0.8rem;
	hr {
		opacity: 20%;
	}

	@media ${device.xs} {
		width: 16rem;
		height: 26rem;
	}
	@media ${device.sm} {
		width: 30rem;
		height: 30rem;
		font-size: 1rem;
		padding: 4rem;
	}
	@media ${device.md} {
		width: 40rem;
		height: 40rem;
	}
	@media ${device.lg} {
		width: 70rem;
		height: 40rem;
	}
`;

export const Button = styled.button`
	${sharedButtonProperties}
`;

export const Disclaimer = styled.p`
	opacity: 70%;
`;
