import { breedingPalModel } from '../interfaces/breedingPalModel';

export const findByRounding_CombiRank = (
	data: breedingPalModel[] | undefined,
	combiRank: number
) => {
	const roundedCombiRank =
		Math.abs(combiRank % 10) < 5
			? Math.floor(combiRank / 10) * 10
			: Math.floor(combiRank / 10) * 10;
	return data?.find((obj) => obj.CombiRank === roundedCombiRank);
};
