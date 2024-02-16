import { breedingPalModel } from '../interfaces/breedingPalModel';
import { breedingTable } from './data/specialPalBreedingTable';

/**
 * For combiRank ending in 5.
 * First, check if smallerCombiRank's distance to combiRank is smaller than the distance
 * between biggerCombiRank to combiRank. Then checks if smallerCombiRank's pal is in the special pal list,
 * and selects the biggerCombiRank if true. And vice-versa.
 */
const specialPals = new Set(breedingTable.map((entry) => entry.result));

export const checkSpecialPalAndCombiRank = (
	smallerCombiRank: breedingPalModel | undefined,
	biggerCombiRank: breedingPalModel | undefined,
	combiRank: number
) => {
	const result =
		combiRank - smallerCombiRank!.CombiRank <
		biggerCombiRank!.CombiRank - combiRank
			? specialPals.has(smallerCombiRank!.Name)
				? biggerCombiRank
				: smallerCombiRank
			: specialPals.has(biggerCombiRank!.Name)
			? smallerCombiRank
			: biggerCombiRank;
	return result;
};
