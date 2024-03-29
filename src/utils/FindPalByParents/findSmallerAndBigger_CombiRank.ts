import { UpdateCombiRankModel } from '../../components/FindPalByParents/SelectPals';
import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { breedingTable } from '../data/specialPalBreedingTable';
import { specialPalSameParents } from '../data/specialPalSameParents';
/**
 * Iterate through data to find the next pal with smaller and bigger combirank (potential child)
 */
export const findSmallerAndBigger_CombiRank = async (
	updateCombiRank: UpdateCombiRankModel,
	data: BreedingPalModel[] | undefined,
	combiRank: number
) => {
	const specialPals = new Set(breedingTable.map((entry) => entry.result));
	let iterator = 5;
	while (
		updateCombiRank.smallerCombiRank === undefined ||
		updateCombiRank.biggerCombiRank === undefined
	) {
		if (updateCombiRank.smallerCombiRank === undefined) {
			const findSmallerCombiRankPal = data?.find(
				(pal) => pal.CombiRank === combiRank - iterator
			);
			if (
				findSmallerCombiRankPal &&
				!specialPalSameParents.includes(findSmallerCombiRankPal?.Name) &&
				!specialPals.has(findSmallerCombiRankPal.Name)
			) {
				updateCombiRank.smallerCombiRank = findSmallerCombiRankPal;
			}
		}
		if (updateCombiRank.biggerCombiRank === undefined) {
			const findBiggerCombiRankPal = data?.find(
				(pal) => pal.CombiRank === combiRank + iterator
			);
			if (
				findBiggerCombiRankPal &&
				!specialPalSameParents.includes(findBiggerCombiRankPal.Name) &&
				!specialPals.has(findBiggerCombiRankPal.Name)
			) {
				updateCombiRank.biggerCombiRank = findBiggerCombiRankPal;
			}
		}
		iterator = iterator + 5;
		if (iterator > 100) {
			return false;
		}
	}
	return updateCombiRank;
};
