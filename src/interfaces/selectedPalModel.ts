import { breedingPalModel } from './breedingPalModel';

export interface selectedPalIModel {
	selectPals: {
		pal1: breedingPalModel | undefined;
		pal2: breedingPalModel | undefined;
	};
}
