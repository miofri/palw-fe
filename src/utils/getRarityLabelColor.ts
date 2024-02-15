export const getRarityLabelColor = (rarity: string): string => {
	switch (rarity) {
		case 'Common':
			return '#7e7e7e';
		case 'Rare':
			return '#6a92ff';
		case 'Epic':
			return '#b963ff';
		case 'Legendary':
			return '#ff9557';
		default:
			return '#000000';
	}
};
