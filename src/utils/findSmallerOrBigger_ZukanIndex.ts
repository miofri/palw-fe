import { breedingPalModel } from '../interfaces/breedingPalModel';
/**
 * For combiRank ending in 5.
 *
 * select child based on zukanindex if there's equal distance between smaller & bigger combirank (e.g. 620 & 630, CR is 625)
 */
export const findSmallerOrBigger_ZukanIndex = (
	smallerCombiRank: breedingPalModel | undefined,
	biggerCombiRank: breedingPalModel | undefined
) => {
	return smallerCombiRank!.ZukanIndex < biggerCombiRank!.ZukanIndex
		? smallerCombiRank
		: biggerCombiRank;
};
