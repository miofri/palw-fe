import styled from 'styled-components';
import { device } from './breakpoints';
//import { device } from './breakpoints';

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

	> button {
		background-color: ${(props) => props.theme.cardBgColor};
		color: ${(props) => props.theme.fontColor};
		width: fit-content;
		height: 2rem;
		border: none;
		border-radius: 0.4rem;
		grid-column-start: 12;
	}

	> h2 {
		color: ${(props) => props.theme.fontColor};
		grid-column-start: 4;
		grid-column-end: 10;
		text-align: center;
		margin: 0;
		font-size: 1rem;
		font-weight: 500;
	}
	@media ${device.xs} {
	}
	@media ${device.md} {
	}
`;
