import { UpdateCombiRankModel } from '../components/breedingPal/SelectPals';
import { breedingTable } from './data/specialPalBreedingTable';
/**
 * For combiRank ending in 5.
 *
 * select child based on zukanindex if there's equal distance between smaller & bigger combirank (e.g. 620 & 630, CR is 625)
 */
const specialPals = new Set(breedingTable.map((entry) => entry.result));

export const findSmallerOrBigger_ZukanIndex = (
	updateCombiRank: UpdateCombiRankModel
) => {
	console.log('in findSmallerAndBigger_CombiRank', updateCombiRank);

	return updateCombiRank.smallerCombiRank!.ZukanIndex <
		updateCombiRank.biggerCombiRank!.ZukanIndex
		? specialPals.has(updateCombiRank.smallerCombiRank!.Name)
			? updateCombiRank.biggerCombiRank
			: updateCombiRank.smallerCombiRank
		: specialPals.has(updateCombiRank.biggerCombiRank!.Name)
		? updateCombiRank.smallerCombiRank
		: updateCombiRank.biggerCombiRank;
};
