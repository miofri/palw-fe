export interface palElement {
	iconUrl1: string;
	iconUrl2: string;
}
const getLastPart = (str: string) => {
	const parts = str.split('::');
	return parts[parts.length - 1];
};

export const getPalElement = (
	ElementType1: string,
	ElementType2: string
): palElement => {
	const element1 = `T_Icon_element_s_${getLastPart(ElementType1)}.webp`;
	const element2 = `T_Icon_element_s_${getLastPart(ElementType2)}.webp`;
	const palElements: palElement = {
		iconUrl1: element1,
		iconUrl2: element2,
	};
	return palElements;
};
