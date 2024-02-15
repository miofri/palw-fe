import { mappedByImageNameModel } from '../interfaces/mappedByImageNameModel';
import { breedingPalModel } from '../interfaces/breedingPalModel';

const mappedByImageName = (
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

export const transformAndMapByImageName = (
	data: breedingPalModel[] | undefined,
	setMappedByImageNameResult: React.Dispatch<
		React.SetStateAction<mappedByImageNameModel[]>
	>
) => {
	if (!data) return [];
	const mappedData: mappedByImageNameModel[] | undefined = [];
	mappedByImageName(data, mappedData);
	setMappedByImageNameResult(mappedData);
};
