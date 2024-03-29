import { sharedButtonProperties } from './Shared';
import styled, { css } from 'styled-components';
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
	background-color: ${(props) => props.theme.cardBgColor};

	.material-symbols-outlined {
		grid-column-start: 12;
		${sharedButtonProperties}
	}
`;

export const DropDownButton = styled.button`
	${sharedButtonProperties};
	font-size: 0.8rem;
	font-weight: 600;
	@media ${device.sm} {
		font-size: 1rem;
	}
`;

export const DropDownContent = styled.div`
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
	@media ${device.sm} {
		font-size: 1rem;
	}
`;
export const DropDownContainer = styled.div`
	grid-column-start: 2;
	&:hover ${DropDownContent} {
		display: block;
	}
`;

export const NavBarLink = css`
	color: ${(props) => props.theme.fontColor};
	text-decoration: none;
`;

export const NavBarTitle = styled.div`
	grid-column-start: 4;
	grid-column-end: 10;
	text-align: center;
	a {
		font-weight: 600;
		${NavBarLink}
	}
	@media ${device.sm} {
		font-size: 1rem;
	}
`;

export const NavBarToParent = styled.button`
	${sharedButtonProperties}
	grid-column-start: 10;
	grid-column-end: 11;
	a {
		margin: 0;
		height: fit-content;
		font-size: 0.9rem;
		font-weight: 600;
		${NavBarLink}
	}
`;
