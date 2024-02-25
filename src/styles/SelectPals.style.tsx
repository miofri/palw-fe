import styled from 'styled-components';
import { device } from './breakpoints';
import { FlexRow } from './GeneralStyle';

export const SelectionBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-top: 4.5rem;
	@media ${device.sm} {
		margin-top: 0;
	}
`;

export const SelectionContainer = styled.div`
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

export const SelectionCard = styled.div<{ $isActive?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 5rem;
	height: 6rem;
	border: ${(props) =>
			props.$isActive
				? `${props.theme.activeBorderColor}`
				: `${props.theme.borderColor}`}
		3px solid;
	border-radius: 2rem;
	background-color: ${(props) => props.theme.cardBgColor};
	> img {
		width: 60%;
		border: ${(props) =>
				props.$isActive
					? `${props.theme.activeBorderColor}`
					: `${props.theme.borderColor}`}
			1px solid;
		border-radius: 3rem;
	}
	> h2 {
		margin: 0;
		font-size: 1rem;
		color: ${(props) => props.theme.fontColor};
	}

	@media ${device.sm} {
		width: 8rem;
		height: 8rem;
	}
`;
