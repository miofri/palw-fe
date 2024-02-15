export const getPalRarityLabel = (palRarity: number): string => {
	if (palRarity >= 1 && palRarity <= 4) {
		return 'Common';
	} else if (palRarity >= 5 && palRarity <= 7) {
		return 'Rare';
	} else if (palRarity >= 8 && palRarity <= 10) {
		return 'Epic';
	} else {
		return 'Legendary';
	}
};
