import { mappedByImageNameModel } from '../interfaces/mappedByImageNameModel';

export const findByCodeName = (
	mapped: mappedByImageNameModel[],
	codeName: string
): string | undefined => {
	const findPal = mapped.find(
		(p) => p.imageName === `T_${codeName}_icon_normal.webp`
	);
	console.log(mapped, codeName);

	if (codeName === 'PlantSlime_Flower') {
		return 'T_PlantSlime_icon_normal.webp';
	} else if (findPal) {
		return findPal.imageName;
	} else {
		return undefined;
	}
};
