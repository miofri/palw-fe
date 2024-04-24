import { BreedingPalModel } from '../../interfaces/BreedingPalModel';

export const findImageByCodeName = (
	data: BreedingPalModel[] | undefined,
	pal: string
): string | undefined => {
	const findCodeName = data?.find((p) => p.CodeName === pal);
	const findPal = `T_${findCodeName?.CodeName}_icon_normal.webp`;

	if (findCodeName?.CodeName === 'PlantSlime_Flower') {
		return 'T_PlantSlime_icon_normal.webp';
	} else if (findPal) {
		return findPal;
	} else {
		return undefined;
	}
};
