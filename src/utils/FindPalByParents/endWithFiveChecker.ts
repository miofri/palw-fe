import { UpdateCombiRankModel } from '../../components/FindPalByParents/SelectPals';
import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { checkEqualCombiRank } from './checkEqualCombiRank';
import { findSmallerAndBigger_CombiRank } from './findSmallerAndBigger_CombiRank';

export const endWithFiveChecker = (
	data: breedingPalModel[] | undefined,
	combiRank: number
) => {
	const findPal =
		data?.find((pal: breedingPalModel) => pal.CombiRank === combiRank) ||
		undefined;
	if (data && findPal) {
		return findPal;
	} else {
		const updateCombiRank: UpdateCombiRankModel = {
			smallerCombiRank: undefined,
			biggerCombiRank: undefined,
		};
		findSmallerAndBigger_CombiRank(updateCombiRank, data, combiRank);
		const result = checkEqualCombiRank(updateCombiRank, combiRank);
		return result;
	}
};
