import React, { useEffect, useState } from 'react';

import * as Styles from '../../styles/GlobalStyles';
import { ParentsModel } from '../../interfaces/ParentsModel';
import { useGetBreedingPalQuery } from '../../store/rtk-slices/breedingPalAPI';
import { findImageByName } from '../../utils/FindPalByParents/findImageByName';

export const TableResult: React.FC<{
	parentsResult: ParentsModel[] | undefined;
	filter: string;
}> = ({ parentsResult, filter }) => {
	const imageUrl = process.env.REACT_APP_PAL_IMAGES_URL;
	const { data } = useGetBreedingPalQuery();
	const [filterData, setFilterData] = useState<ParentsModel[]>();

	useEffect(() => {
		if (parentsResult) {
			const filterResult = parentsResult.filter((pal) =>
				pal.pal.toLowerCase().includes(filter.toLowerCase())
			);
			setFilterData(filterResult);
			console.log(filterData);
		}
	}, [filter]);

	return (
		<Styles.FindByChild.TableContainer>
			{filterData?.map((p) => (
				<Styles.FindByChild.Table>
					<Styles.FindByChild.Pal key={`${p.pal}Parent`}>
						<Styles.FindByChild.Image
							src={`${imageUrl}${findImageByName(data, p.pal)}`}
						/>
						{p.pal}
					</Styles.FindByChild.Pal>
					{/*<Styles.FindByChild.Pair>paired with: </Styles.FindByChild.Pair>*/}
					<Styles.FindByChild.PlusSign>+</Styles.FindByChild.PlusSign>
					<React.Fragment key={p.pal}>
						{p.pair.map((pairs) => (
							<Styles.FindByChild.Pair>
								<Styles.FindByChild.Image
									src={`${imageUrl}${findImageByName(data, pairs)}`}
								/>
								{pairs}
							</Styles.FindByChild.Pair>
						))}
					</React.Fragment>
				</Styles.FindByChild.Table>
			))}
		</Styles.FindByChild.TableContainer>
	);
};
