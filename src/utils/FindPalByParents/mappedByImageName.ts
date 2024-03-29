import { MappedByImageNameModel } from '../../interfaces/MappedByImageNameModel';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { mapPalByImageNameSlice } from '../../store/slices/mapPalByImageNameSlice';
import { store } from '../../store/store';

const mappedByImageName = (
	data: BreedingPalModel[] | undefined,
	mappedData: MappedByImageNameModel[]
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
	data: BreedingPalModel[] | undefined
) => {
	if (!data) return [];
	const mappedData: MappedByImageNameModel[] | undefined = [];
	mappedByImageName(data, mappedData);
	store.dispatch(
		mapPalByImageNameSlice.actions.setMappedByImageName(mappedData)
	);
};
