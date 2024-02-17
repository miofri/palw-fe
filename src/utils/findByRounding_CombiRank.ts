import { UpdateCombiRankModel } from '../components/breedingPal/SelectPals';
import { breedingPalModel } from '../interfaces/breedingPalModel';
import { breedingTable } from './data/specialPalBreedingTable';
import { findSmallerAndBigger_CombiRank } from './findSmallerAndBigger_CombiRank';

const specialPals = new Set(breedingTable.map((entry) => entry.result));

export const findByRounding_CombiRank = (
	data: breedingPalModel[] | undefined,
	combiRank: number
) => {
	const updateCombiRank: UpdateCombiRankModel = {
		smallerCombiRank: undefined,
		biggerCombiRank: undefined,
	};
	const roundedCombiRank = (Math.floor(combiRank) / 10) * 10;
	const findPalByCombiRank = data?.find(
		(obj) => obj.CombiRank === roundedCombiRank
	);
	console.log(combiRank, roundedCombiRank, findPalByCombiRank);

	if (findPalByCombiRank && specialPals.has(findPalByCombiRank?.Name)) {
		findSmallerAndBigger_CombiRank(updateCombiRank, data, roundedCombiRank);
		console.log(updateCombiRank);

		if (updateCombiRank.smallerCombiRank && updateCombiRank.biggerCombiRank) {
			const finalResult =
				updateCombiRank.smallerCombiRank?.ZukanIndex <
				updateCombiRank.biggerCombiRank?.ZukanIndex
					? updateCombiRank.smallerCombiRank
					: updateCombiRank.biggerCombiRank;
			return finalResult;
		}
	}
	return findPalByCombiRank;
};
