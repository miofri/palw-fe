import { mappedByImageNameModel } from '../interfaces/mappedByImageNameModel';

export const findByCodeName = (
	mapped: mappedByImageNameModel[],
	codeName: string
): string | undefined => {
	const findPal = mapped.find((p) => p.imageName.includes(codeName));
	if (codeName === 'PlantSlime_Flower') {
		return 'T_PlantSlime_icon_normal.webp';
	} else if (findPal) {
		return findPal.imageName;
	} else {
		return undefined;
	}
};
