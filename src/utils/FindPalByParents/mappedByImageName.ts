import { mappedByImageNameModel } from '../../interfaces/mappedByImageNameModel';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { mapPalByImageNameSlice } from '../../store/slices/mapPalByImageNameSlice';
import { store } from '../../store/store';

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
	data: breedingPalModel[] | undefined
) => {
	if (!data) return [];
	const mappedData: mappedByImageNameModel[] | undefined = [];
	mappedByImageName(data, mappedData);
	store.dispatch(
		mapPalByImageNameSlice.actions.setMappedByImageName(mappedData)
	);
};
