import React, { useEffect, useState } from 'react';

import * as Styles from '../../styles/GlobalStyles';
import { Layout } from '../Layout';
import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';
import { ParentsModel } from '../../interfaces/ParentsModel';
import { useLazyGetParentsQuery } from '../../store/rtk-slices/parentAPI';

export const ChildPalList: React.FC = () => {
	const { data, isLoading } = useGetBreedingPalQuery();
	const nameOnly = data?.map((data) => data.Name).sort();
	const [selectPal, setSelectPal] = useState('Anubis');
	const [parentsResult, setParentsResult] = useState<ParentsModel[]>();
	const [getParents, result] = useLazyGetParentsQuery();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		getParents(selectPal);
	};

	useEffect(() => {
		if (result) {
			setParentsResult(result.currentData);
			console.log(parentsResult);
		}
	}, [result]);

	if (data) {
		return (
			<Layout>
				<Styles.FindByChild.Container>
					<form>
						<label htmlFor="pals">Choose Pal: </label>
						<select
							name="pals"
							id="pals"
							onChange={(e) => setSelectPal(e.target.value)}
						>
							{nameOnly!.map((pal) => (
								<option key={pal} value={pal}>
									{pal}
								</option>
							))}
						</select>
						<button onClick={(e) => handleClick(e)}>Find parents</button>
					</form>
				</Styles.FindByChild.Container>
			</Layout>
		);
	} else if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return <div>Something went wrong...</div>;
	}
};
