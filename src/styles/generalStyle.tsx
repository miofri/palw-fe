import styled, { css } from 'styled-components';
import { colors } from './theme';
import { device } from './breakpoints';
import { getRarityLabelColor } from '../utils/getRarityLabelColor';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	background-color: #111827;
	transition: all 0.5s ease; // transition for the theme toggler
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: 100vw;
	color-scheme: dark;
	color: #fff;
`;

export const FlexRow = css`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const PalSelectionContainer = styled.div`
	${FlexRow}
	justify-content: center;
	align-items: center;
	width: fit-content;
	height: fit-content;
	@media ${device.md} {
		gap: 0.4rem;
	}
	.sign {
		font-size: 2rem;
		font-weight: 900;
		margin: 0;
	}
`;

export const PalSelectionCard = styled.div<{ $isActive?: string }>`
	width: 10rem;
	height: 10rem;
	border: ${(props) => (props.$isActive ? '#59d0f5' : '#36609b')} 2px solid;
`;

export const PalCardsContainer = styled.div`
	${FlexRow}
	justify-content: center;
	gap: 3vw;
	width: 90vw;
	height: 60vh;
	overflow-y: scroll;
	@media ${device.sm} {
		gap: 1vw;
		width: 70vw;
	}
	@media ${device.md} {
		gap: 1vw;
		width: 50vw;
	}
`;

export const PalCard = styled.div`
	width: 20vw;
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
		width: 10vw;
		min-height: 18.5vh;
		border-radius: 1.5vh;
	}
	@media ${device.md} {
		width: 8vw;
		min-height: 16vh;
	}
	@media ${device.lg} {
		width: 6vw;
	}
	p {
		font-size: 0.7rem;
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
	font-size: 0.7rem;
	line-height: 1rem;
	margin: 0.4rem 0;
	@media ${device.xs} {
		font-size: 0.8rem;
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
