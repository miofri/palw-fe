import { UpdateCombiRankModel } from '../components/breedingPal/SelectPals';
import { breedingPalModel } from '../interfaces/breedingPalModel';
import { checkEqualCombiRank } from './checkEqualCombiRank';
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
	const roundedCombiRank = Math.floor(Math.floor(combiRank) / 10) * 10;
	const findPalByCombiRank = data?.find(
		(obj) => obj.CombiRank === roundedCombiRank
	);
	console.log('roudnedcombirank', roundedCombiRank, findPalByCombiRank);
	findSmallerAndBigger_CombiRank(updateCombiRank, data, roundedCombiRank);
	if (
		findPalByCombiRank &&
		specialPals.has(findPalByCombiRank?.Name) &&
		updateCombiRank.smallerCombiRank &&
		updateCombiRank.biggerCombiRank
	) {
		const finalResult = updateCombiRank.smallerCombiRank
			? updateCombiRank.smallerCombiRank
			: updateCombiRank.biggerCombiRank;
		return finalResult;
	} else if (!findPalByCombiRank) {
		const result = checkEqualCombiRank(updateCombiRank, combiRank);
		return result;
	}
	return findPalByCombiRank;
};
