import { UpdateCombiRankModel } from '../components/breedingPal/SelectPals';
import { breedingPalModel } from '../interfaces/breedingPalModel';
/**
 * For combiRank ending in 5.
 * iterate through data to find the next pal with smaller and bigger combirank (potential child)
 */
export const findSmallerAndBigger_CombiRank = async (
	updateCombiRank: UpdateCombiRankModel,
	data: breedingPalModel[] | undefined,
	combiRank: number
) => {
	let iterator = 5;
	while (
		updateCombiRank.smallerCombiRank === undefined ||
		updateCombiRank.biggerCombiRank === undefined
	) {
		if (updateCombiRank.smallerCombiRank === undefined) {
			updateCombiRank.smallerCombiRank = data?.find(
				(pal) => pal.CombiRank === combiRank - iterator
			);
		}
		if (updateCombiRank.biggerCombiRank === undefined) {
			updateCombiRank.biggerCombiRank = data?.find(
				(pal) => pal.CombiRank === combiRank + iterator
			);
		}
		iterator = iterator + 5;
		if (iterator > 100) {
			return false;
		}
	}
	return updateCombiRank;
};
