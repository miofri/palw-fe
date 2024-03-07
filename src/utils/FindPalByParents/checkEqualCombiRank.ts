import { UpdateCombiRankModel } from '../../components/FindPalByParents/SelectPals';
import { checkSpecialPalAndCombiRank } from './checkSpecialPalAndCombiRank';
import { findSmallerOrBigger_IndexOrder } from './findSmallerOrBigger_IndexOrder';

export const checkEqualCombiRank = (
	updateCombiRank: UpdateCombiRankModel,
	combiRank: number
) => {
	const result =
		updateCombiRank.biggerCombiRank!.CombiRank - combiRank ===
		combiRank - updateCombiRank.smallerCombiRank!.CombiRank
			? findSmallerOrBigger_IndexOrder(updateCombiRank)
			: checkSpecialPalAndCombiRank(updateCombiRank, combiRank);
	return result;
};
