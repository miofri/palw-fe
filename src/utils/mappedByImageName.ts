import { mappedByImageNameModel } from '../interfaces/mappedByImageNameModel';
import { breedingPalModel } from '../interfaces/breedingPalModel';

export const mappedByImageName = (
	data: breedingPalModel[] | undefined,
	mappedData: mappedByImageNameModel[]
) => {
	const newMappedData = data?.map((p) => ({
		imageName: `T_${p.CodeName}_icon_normal.webp`,
	}));
	if (newMappedData) {
		newMappedData.forEach((element) => {
			mappedData.push(element);
		});
	}
};
