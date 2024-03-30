import styled, { css } from 'styled-components';
import { device } from './breakpoints';

export const Container = styled.div`
	width: 19rem;
	height: 28rem;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.fontColor};
	position: relative; /* Ensure the container is a positioned parent for absolute positioning */
	border-radius: 1rem;
	font-size: 0.8rem;
	hr {
		opacity: 20%;
	}

	h2 {
		width: 90%;
		margin: 0.5rem auto;
	}
	@media ${device.xs} {
		width: 24rem;
		height: 44rem;
	}
	@media ${device.sm} {
		width: 28rem;
		height: 44rem;
		font-size: 1rem;
		padding: 1.2rem 4rem;
	}
	@media ${device.md} {
		width: 42rem;
		height: 44rem;
	}
	@media ${device.lg} {
		width: 60rem;
		height: 50rem;
	}

	@media (${device.md}) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
		height: 28rem;
	}
	@media (${device.lg}) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
		height: 36rem;
	}
`;

export const sharedFlexProperty = css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const InnerContainer = styled.div`
	width: 15.9rem;
	height: 12rem;
	overflow-y: scroll;
	overflow-x: scroll;
	font-size: 0.6rem;
	margin: auto;
	@media ${device.xs} {
		width: 21.6rem;
		height: 26rem;
	}
	@media ${device.sm} {
		width: 32rem;
		height: 26rem;
	}
	@media ${device.md} {
		font-size: 0.6rem;
		width: 42rem;
		height: 30rem;
	}
	@media ${device.lg} {
		font-size: 0.8rem;
		width: 60rem;
		height: 36rem;
		overflow-x: visible;
	}

	@media (${device.md}) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
		height: 16rem;
	}
	@media (${device.lg}) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
		height: 25rem;
	}
`;

export const Button = styled.button`
	width: 4rem;
	height: 2rem;
	font-size: 0.6rem;

	border: none;
	border-radius: 0.4rem;
	background-color: ${(props) => props.theme.secondaryButtonColor};
	color: white;
	cursor: pointer;
	@media ${device.xs} {
		font-size: 0.8rem;
		width: 6rem;
		height: 2rem;
	}
`;

export const Disclaimer = styled.p`
	opacity: 70%;
`;

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const Table = styled.div`
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: repeat(4, 2rem);
	grid-auto-flow: row dense;
	padding-bottom: 1rem;
	border-bottom: 1px grey solid;
	justify-content: center;
`;

export const Pal = styled.div`
	grid-column: span 2;
	grid-row: span 6;
	align-self: stretch;
	overflow-x: wrap;
	background-color: ${(props) => props.theme.secondaryButtonColor};
	color: white;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	@media ${device.lg} {
		grid-row: span 4;
	}
`;

export const Pair = styled.div`
	grid-column: span 2;
	grid-row: span 2;
	border-right: 1px grey solid;
	${sharedFlexProperty}
	flex-direction: column;
	text-align: center;
	@media ${device.lg} {
		grid-column: span 1;
		grid-row: span 4;
	}
`;

export const Image = styled.img`
	width: 1rem;
	border-radius: 2rem;
	background-color: none;
	@media ${device.xs} {
		width: 1.8rem;
	}
	@media ${device.sm} {
		width: 2rem;
	}
	@media ${device.md} {
		width: 50px;
	}
`;

export const Form = styled.form`
	${sharedFlexProperty}
	gap: 0.5rem;
	border-bottom: 1px grey solid;
	padding-bottom: 1rem;
	margin: auto auto;
	width: 16rem;
	font-size: 0.5rem;
	@media ${device.xs} {
		font-size: 0.8rem;
		width: auto;
	}
	@media ${device.sm} {
		font-size: 1rem;
		gap: 0.8rem;
	}
	select,
	input {
		width: 2rem;
		@media ${device.xs} {
			font-size: 1rem;
			width: 3rem;
		}
		@media ${device.sm} {
			width: auto;
		}
	}
`;

export const Heading1 = styled.h1`
	text-align: center;
	font-size: 1rem;
	margin-bottom: 1rem;
	@media ${device.sm} {
		font-size: 1.6rem;
	}
`;

export const PlusSign = styled.p`
	grid-column: span 1;
	grid-row: span 6;
	${sharedFlexProperty}
	margin: 0;
	font-size: 2rem;
	text-align: center;
`;

export const HomeButton = styled(Button)`
	background-color: #7951a7;
	color: white;
	width: 3rem;
	font-size: 0.6rem;
	@media ${device.xs} {
		font-size: 0.8rem;
	}
`;
