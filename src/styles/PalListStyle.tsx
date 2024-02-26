import styled, { css } from 'styled-components';
import { device } from './breakpoints';
import { getRarityLabelColor } from '../utils/getRarityLabelColor';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: ${(props) => props.theme.backgroundColor};
	transition: all 0.5s ease; // transition for the theme toggler
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: 100vw;
	color-scheme: ${(props) => props.theme.colorScheme};
	color: #fff;
`;

export const FlexRow = css`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const CardsContainer = styled.div`
	${FlexRow}
	align-items: center;
	justify-content: center;
	gap: 3vw;
	width: 80vw;
	height: 22rem;
	overflow-y: scroll;
	@media ${device.xs} {
		height: 32rem;
	}
	@media ${device.sm} {
		gap: 1vw;
		width: 70vw;
		height: 35rem;
	}
	@media ${device.md} {
		gap: 1vw;
		width: 50rem;
		height: 16rem;
	}
	@media ${device.lg} {
		height: 26rem;
	}
	@media ${device.xl} {
		gap: 1vw;
		width: 70rem;
		height: 40rem;
	}
`;
export const CardFigure = styled.figure`
	margin: 0.4rem auto auto auto;
	width: 70%;

	> img {
		border: 0.1rem solid ${(props) => props.theme.borderColor};
		border-radius: 3rem;
		width: 100%;
	}
`;
export const Card = styled.div`
	display: grid;
	grid-template-rows: 3.5rem 4.2rem 1rem 2.4rem;
	align-items: center;
	width: 4rem;
	height: 11.2rem;
	padding-top: 0.2rem;
	background-color: ${(props) => props.theme.cardBgColor};
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 1vh;
	&:hover {
		border: 0.1rem solid ${(props) => props.theme.activeBorderColor};
		${CardFigure} > img {
			border: 0.1rem solid ${(props) => props.theme.activeBorderColor};
		}
	}

	@media ${device.xs} {
		grid-template-rows: 3rem 4rem 1.5rem 2rem;
		width: 4rem;
		height: 11rem;
	}

	@media ${device.sm} {
		grid-template-rows: 5rem 4.5rem 1.5rem 2rem;
		width: 6.5rem;
		height: 14rem;
		border-radius: 1.5vh;
	}
	@media ${device.md} {
		grid-template-rows: 4rem 4.5rem 1.5rem 2rem;
		width: 5rem;
		height: 12.5rem;
	}
	@media ${device.lg} {
		width: 6vw;
	}
	p {
		font-size: 0.7rem;
		text-align: center;
	}
`;

export const CardTitle = styled.h2`
	text-align: center;
	font-size: 0.7rem;
	font-weight: 600;
	line-height: 1rem;
	margin: 0;
	color: ${(props) => props.theme.fontColor};
	@media ${device.xs} {
		font-size: 0.7rem;
		font-weight: 500;
	}
	@media ${device.md} {
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1.2rem;
	}
`;

export const CardRarityLabel = styled.p<{ $rarity: string }>`
	margin: auto;
	width: 80%;
	padding: 0.1rem;
	/*border: 0.1rem solid ${(props) => getRarityLabelColor(props.$rarity)};*/
	border-radius: 1rem;
	color: white;
	background-color: ${(props) => getRarityLabelColor(props.$rarity)};
`;

export const CardElementLabel = styled.figure`
	width: 3rem;
	height: 1.5rem;
	margin: 0.5rem auto 0.2rem auto;
	display: grid;
	grid-template-columns: 1.5rem 1.5rem;
	align-items: center;
`;
export const CardElementImage = styled.img`
	grid-area: 'icon';
	min-width: 1rem;
	width: 100%;
`;
