import React, { useEffect, useState } from 'react';

import * as Styles from '../../styles/GlobalStyles';
import { Layout } from '../Layout';
import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';
import { ParentsModel } from '../../interfaces/ParentsModel';
import { useLazyGetParentsQuery } from '../../store/rtk-slices/parentAPI';
import { PalSelect } from './PalSelect';
import { TableResult } from './TableResult';

export const ChildPalList: React.FC = () => {
	const { data, isLoading } = useGetBreedingPalQuery();
	const nameOnly = data?.map((data) => data.Name).sort();
	const [selectPal, setSelectPal] = useState('Anubis');
	const [parentsResult, setParentsResult] = useState<ParentsModel[]>();
	const [getParents, result] = useLazyGetParentsQuery();
	const [filter, setFilter] = useState<string>('');
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		getParents(selectPal);
	};

	useEffect(() => {
		if (result && result.currentData) {
			const sortedResult = [...result.currentData].sort((a, b) =>
				a.pal.localeCompare(b.pal)
			);
			setParentsResult(sortedResult);
			console.log(parentsResult);
		}
	}, [result]);

	if (data) {
		return (
			<Layout>
				<Styles.FindByChild.Container>
					<Styles.FindByChild.Heading1>
						Find parents combination by pal
					</Styles.FindByChild.Heading1>
					<PalSelect
						nameOnly={nameOnly}
						setSelectPal={setSelectPal}
						handleClick={handleClick}
						setFilter={setFilter}
					/>
					<h2>Breed the left hand side pal with any on the right</h2>
					<Styles.FindByChild.InnerContainer>
						<TableResult parentsResult={parentsResult} filter={filter} />
					</Styles.FindByChild.InnerContainer>
				</Styles.FindByChild.Container>
			</Layout>
		);
	} else if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return <div>Something went wrong...</div>;
	}
};
