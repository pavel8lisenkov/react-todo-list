import React, { useState } from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';
import Check from './Check';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';

const TodoItem = ({ todo, todos, setTodos }) => {
	const [newTitle, setNewTitle] = useState(todo.title);

	const changeTodo = (todos, id) => {
		const copy = todos.map(todo => {
			if (todo._id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			} else {
				return todo;
			}
		});
		setTodos(copy);
	};

	const editTodo = (todos, id) => {
		const copy = todos.map(t => {
			if (t._id === id) {
				return { ...t, title: newTitle, isEdit: !t.isEdit };
			} else {
				return { ...t, isEdit: false };
			}
		});
		setTodos(copy);
	};

	const removeTodo = (todos, id) => {
		setTodos(todos.filter(t => t._id !== id));
	};

	return (
		<div
			className='flex grow flex-col md:sm:flex-row items-center justify-between gap-4 mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
			key={todo._id}
		>
			<div className='flex flex-grow gap-3 w-full '>
				<TodoButton
					className='flex items-center'
					onClick={() => {
						console.log('test');
						changeTodo(todos, todo._id);
					}}
				>
					<Check isCompleted={todo.isCompleted} />
				</TodoButton>

				<TodoInput
					todos={todos}
					todo={todo}
					editTodo={editTodo}
					newTitle={newTitle}
					setNewTitle={setNewTitle}
					placeholder={
						todo.title.length > 0 ? '' : 'Задача должна содержать текст'
					}
				/>
			</div>
			<div className='flex gap-3'>
				<TodoButton
					title={'Редактировать задачу'}
					onClick={() => {
						editTodo(todos, todo._id);
					}}
				>
					<BsPencil size={22} />
				</TodoButton>
				<TodoButton
					title={'Удалить задачу'}
					onClick={() => removeTodo(todos, todo._id)}
				>
					<BsTrash size={22} />
				</TodoButton>
			</div>
		</div>
	);
};

export default TodoItem;
