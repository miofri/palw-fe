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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 10rem;
	height: 10rem;
	border: ${(props) => (props.$isActive ? '#59d0f5' : '#36609b')} 2px solid;
	> img {
		width: 6rem;
		border: ${(props) => (props.$isActive ? '#59d0f5' : '#36609b')} 2px solid;
		border-radius: 3rem;
	}
`;

export const PalCardsContainer = styled.div`
	${FlexRow}
	align-items: center;
	justify-content: center;
	gap: 3vw;
	width: 80vw;
	height: 30rem;
	overflow-y: scroll;
	@media ${device.sm} {
		gap: 1vw;
		width: 70vw;
	}
	@media ${device.md} {
		gap: 1vw;
		width: 70vw;
	}
`;

export const PalCard = styled.div`
	display: grid;
	grid-template-rows: 3.5rem 4.2rem 1rem 2.4rem;
	align-items: center;
	width: 4rem;
	height: 11.2rem;
	padding-top: 0.2rem;

	background-color: #1f2937;
	border: 0.1rem solid ${colors.borderColor};
	border-radius: 1vh;

	@media ${device.xs} {
		grid-template-rows: 5rem 4rem 1.5rem 2rem;
		width: 6rem;
		height: 13rem;
	}

	@media ${device.sm} {
		grid-template-rows: 5rem 4.5rem 1.5rem 2rem;
		width: 6.5rem;
		height: 14rem;
		border-radius: 1.5vh;
	}
	@media ${device.md} {
		grid-template-rows: 5rem 4.5rem 1.5rem 2rem;
		height: 14rem;
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
	font-weight: 600;
	line-height: 1rem;
	margin: 0;
	@media ${device.xs} {
		font-size: 0.8rem;
		font-weight: 500;
	}
	@media ${device.md} {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.2rem;
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
	align-items: center;
`;
export const PalCardElementImage = styled.img`
	grid-area: 'icon';
	min-width: 1rem;
	width: 100%;
`;
