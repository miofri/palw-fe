import { UpdateCombiRankModel } from '../../components/FindPalByParents/SelectPals';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { checkEqualCombiRank } from './checkEqualCombiRank';
import { findSmallerAndBigger_CombiRank } from './findSmallerAndBigger_CombiRank';

export const endWithFiveChecker = (
	data: BreedingPalModel[] | undefined,
	combiRank: number
) => {
	const findPal =
		data?.find((pal: BreedingPalModel) => pal.CombiRank === combiRank) ||
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
