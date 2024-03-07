import { breedingPalModel } from '../../interfaces/breedingPalModel';
import { breedingTable } from '../data/specialPalBreedingTable';

export const checkParentsCombo = (
	selectedPals: {
		pal1: breedingPalModel | undefined;
		pal2: breedingPalModel | undefined;
	},
	data: breedingPalModel[] | undefined
) => {
	if (data && selectedPals.pal1 && selectedPals.pal2)
		for (const entry of breedingTable) {
			if (
				entry.parent1 === selectedPals.pal1.Name &&
				entry.parent2 === selectedPals.pal2.Name
			) {
				return data.find((pal) => pal.Name === entry.result);
			} else if (
				entry.parent1 === selectedPals.pal2.Name &&
				entry.parent2 === selectedPals.pal1.Name
			) {
				return data.find((pal) => pal.Name === entry.result);
			}
		}
	return undefined;
};
