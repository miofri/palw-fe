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
	const roundedCombiRank = Math.floor(Math.floor(combiRank) / 10) * 10;
	console.log('roudnedcombirank', roundedCombiRank);

	const findPalByCombiRank = data?.find(
		(obj) => obj.CombiRank === roundedCombiRank
	);

	if (findPalByCombiRank && specialPals.has(findPalByCombiRank?.Name)) {
		findSmallerAndBigger_CombiRank(updateCombiRank, data, roundedCombiRank);
		if (updateCombiRank.smallerCombiRank && updateCombiRank.biggerCombiRank) {
			console.log(
				'smallerCombiRank: ',
				updateCombiRank.smallerCombiRank,
				'biggerCombiRank: ',
				updateCombiRank.biggerCombiRank
			);

			const finalResult =
				updateCombiRank.smallerCombiRank?.CombiRank <
				updateCombiRank.biggerCombiRank?.CombiRank
					? updateCombiRank.smallerCombiRank
					: updateCombiRank.biggerCombiRank;
			return finalResult;
		}
	}
	return findPalByCombiRank;
};
