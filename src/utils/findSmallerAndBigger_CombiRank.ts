import { breedingPalModel } from '../interfaces/breedingPalModel';
/**
 * For combiRank ending in 5.
 * iterate through data to find the next pal with smaller and bigger combirank (potential child)
 */
export const findSmallerAndBigger_CombiRank = (
	smallerCombiRank: breedingPalModel | undefined,
	biggerCombiRank: breedingPalModel | undefined,
	data: breedingPalModel[] | undefined,
	combiRank: number
) => {
	let iterator = 5;
	while (smallerCombiRank === undefined || biggerCombiRank === undefined) {
		if (smallerCombiRank === undefined) {
			smallerCombiRank = data?.find(
				(pal) => pal.CombiRank === combiRank - iterator
			);
		}
		if (biggerCombiRank === undefined) {
			biggerCombiRank = data?.find(
				(pal) => pal.CombiRank === combiRank + iterator
			);
		}
		iterator = iterator + 5;
	}
};
