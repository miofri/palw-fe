import styled from 'styled-components';
import { colors } from './theme';
import { device } from './breakpoints';
import { getRarityLabelColor } from '../utils/getRarityLabelColor';

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #111827;
	transition: all 0.5s ease; // transition for the theme toggler
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: 100vw;
	color-scheme: dark;
	color: #fff;
`;

export const PalCardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3vw;
	width: 90vw;
	height: 60vh;
	overflow-y: scroll;
	@media ${device.md} {
		gap: 1vw;
		width: 50vw;
	}
`;

export const PalCard = styled.div`
	width: 30vw;
	min-height: 21.5vh;
	padding: 0.2rem;
	background-color: #1f2937;
	border: 0.1rem solid ${colors.borderColor};
	border-radius: 1vh;

	@media ${device.xs} {
		width: 24vw;
		min-height: 19vh;
	}

	@media ${device.sm} {
		width: 26vw;
		min-height: 18.5vh;
		border-radius: 1.5vh;
	}
	@media ${device.md} {
		width: 16vw;
	}
	@media ${device.lg} {
		width: 8vw;
	}
	p {
		text-align: center;
	}
`;

export const PalCardFigure = styled.figure`
	margin: 0.4rem auto auto auto;
	width: 70%;
	> img {
		border: 0.1rem solid ${colors.borderColor};
		border-radius: 3rem;
		width: 100%;
	}
`;

export const PalCardTitle = styled.h2`
	text-align: center;
	font-size: 1rem;
	line-height: 1.8rem;
	margin: 0;
	@media ${device.xs} {
		font-size: 1.2rem;
	}
	@media ${device.md} {
		font-size: 0.8rem;
	}
`;

export const PalCardRarityLabel = styled.p<{ $rarity: string }>`
	margin: auto;
	width: 80%;
	border: 0.1rem solid ${(props) => getRarityLabelColor(props.$rarity)};
	border-radius: 1rem;
`;

export const PalCardElementLabel = styled.figure`
	width: 3rem;
	height: 1.5rem;
	margin: 0.5rem auto 0.2rem auto;
	display: grid;
	grid-template-columns: 1.5rem 1.5rem;
	grid-template-areas: 'icon icon';
	align-items: center;
`;
export const PalCardElementImage = styled.img`
	grid-area: 'icon';
	min-width: 1rem;
	width: 100%;
`;
