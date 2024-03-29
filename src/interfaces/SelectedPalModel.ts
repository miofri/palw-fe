import { BreedingPalModel } from './BreedingPalModel';

export interface SelectedPalIModel {
	selectPals: {
		pal1: BreedingPalModel | undefined;
		pal2: BreedingPalModel | undefined;
	};
}
