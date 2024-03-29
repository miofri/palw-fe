import { BreedingPalModel } from '../../interfaces/BreedingPalModel';
import { breedingTable } from '../data/specialPalBreedingTable';

export const checkParentsCombo = (
	selectedPals: {
		pal1: BreedingPalModel | undefined;
		pal2: BreedingPalModel | undefined;
	},
	data: BreedingPalModel[] | undefined
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
