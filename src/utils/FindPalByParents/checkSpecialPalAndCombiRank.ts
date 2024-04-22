import { UpdateCombiRankModel } from '../../components/FindPalByParents/SelectPals';
import { breedingTable } from '../data/specialPalBreedingTable';

/**
 * For combiRank ending in 5.
 * First, check if smallerCombiRank's distance to combiRank is smaller than the distance
 * between biggerCombiRank to combiRank. Then checks if smallerCombiRank's pal is in the special pal list,
 * and selects the biggerCombiRank if true. And vice-versa.
 */
const specialPals = new Set(breedingTable.map((entry) => entry.result));

export const checkSpecialPalAndCombiRank = (
	updateCombiRank: UpdateCombiRankModel,
	combiRank: number
) => {
	const result =
		combiRank - updateCombiRank.smallerCombiRank!.CombiRank <
		updateCombiRank.biggerCombiRank!.CombiRank - combiRank
			? specialPals.has(updateCombiRank.smallerCombiRank!.Name)
				? updateCombiRank.biggerCombiRank
				: updateCombiRank.smallerCombiRank
			: specialPals.has(updateCombiRank.biggerCombiRank!.Name)
				? updateCombiRank.smallerCombiRank
				: updateCombiRank.biggerCombiRank;
	return result;
};
