import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isCompleted }) => {
	return (
		<div className='border-2 rounded-lg border-gray-600 transition-colors ease-in-out duration-300 w-6 h-6 flex items-center justify-center hover:border-violet-500 '>
			{isCompleted && <BsCheck size={24} />}
		</div>
	);
};

export default Check;
