import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const SelectPals = () => {
	const selectedPals = useSelector(
		(state: RootState) => state.selectPal.selectPals
	);
	const [activeSlot, setActiveSlot] = useState('slot1');

	return (
		<>
			<div
				className={`${activeSlot === 'slot1' ? 'active' : ''}`}
				style={{ width: '100px', height: '100px', border: 'red 2px solid' }}
			>
				{selectedPals.pal1}
			</div>
			<div
				className={`${activeSlot === 'slot2' ? 'active' : ''}`}
				style={{ width: '100px', height: '100px', border: 'red 2px solid' }}
			>
				{selectedPals.pal2}
			</div>
		</>
	);
};
