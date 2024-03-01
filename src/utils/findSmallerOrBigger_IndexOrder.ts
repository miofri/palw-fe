import { UpdateCombiRankModel } from '../components/breedingPal/SelectPals';
import { breedingTable } from './data/specialPalBreedingTable';
const specialPals = new Set(breedingTable.map((entry) => entry.result));

/**
 * For combiRank ending in 5. select child based on IndexOrder if
 * there's equal distance between smaller & bigger combirank (e.g. 620 & 630, CR is 625)
 */
export const findSmallerOrBigger_IndexOrder = (
	updateCombiRank: UpdateCombiRankModel
) => {
	return updateCombiRank.smallerCombiRank!.IndexOrder <
		updateCombiRank.biggerCombiRank!.IndexOrder
		? specialPals.has(updateCombiRank.smallerCombiRank!.Name)
			? updateCombiRank.biggerCombiRank
			: updateCombiRank.smallerCombiRank
		: specialPals.has(updateCombiRank.biggerCombiRank!.Name)
		? updateCombiRank.smallerCombiRank
		: updateCombiRank.biggerCombiRank;
};
