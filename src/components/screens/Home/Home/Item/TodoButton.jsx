import React from 'react';

const TodoButton = ({ children, title, onClick }) => {
	return (
		<button
			className='text-gray-600 hover:text-violet-500 transition-colors ease-in-out duration-300'
			title={title}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default TodoButton;
