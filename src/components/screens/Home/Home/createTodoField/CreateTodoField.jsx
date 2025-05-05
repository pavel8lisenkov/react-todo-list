import cn from 'classnames';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const CreateTodoField = ({ todos, setTodos }) => {
	const [title, setTitle] = useState('');
	const [warning, setWarning] = useState(false);

	const addTodo = title => {
		const copy = todos.map(todo => {
			todo.isEdit = false;
			return todo;
		});
		setTodos(copy);
		if (title.trim().length > 0 && !warning) {
			setTodos(prev => [
				...prev,
				{ _id: nanoid(), title, isCompleted: false, isEdit: false },
			]);
			setTitle('');
		} else if (title.trim().length > 0 && warning) {
			setTodos(prev => [
				...prev,
				{ _id: nanoid(), title, isCompleted: false, isEdit: false },
			]);
			setWarning(false);
			setTitle('');
		} else {
			setTitle(title.trim());
			setWarning(true);
		}
	};

	return (
		<div
			className={cn(
				'flex flex-col md:sm:flex-row items-center justify-between gap-4 mb-4 rounded-2xl border-zinc-800 border-2 w-full p-2'
			)}
		>
			<input
				type='text'
				onChange={event => setTitle(event.target.value)}
				value={title}
				onKeyDown={event => event.key === 'Enter' && addTodo(title)}
				className={cn('bg-transparent w-full border-none outline-none', {
					'placeholder-red-600': warning,
				})}
				placeholder={
					warning
						? 'Задача должна содержать текст'
						: 'Введите текст новой задачи'
				}
			/>
			<button
				className='bg-gray-600 hover:bg-violet-500 transition-colors ease-in-out duration-300 rounded-2xl p-3 whitespace-nowrap active:bg-gray-600'
				onClick={() => addTodo(title)}
			>
				Добавить задачу
			</button>
		</div>
	);
};

export default CreateTodoField;
