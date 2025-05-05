import cn from 'classnames';
import React from 'react';

const TodoInput = ({
	todos,
	todo,
	editTodo,
	placeholder,
	newTitle,
	setNewTitle,
}) => {
	return (
		<input
			type='text'
			value={newTitle}
			onChange={e => {
				setNewTitle(e.target.value);
			}}
			className={cn('bg-transparent w-full outline-none', {
				'line-through': todo.isCompleted && todo.title.trim().length > 0,
				'placeholder-red-600': todo.title.length === 0,
			})}
			autoFocus={todo.isEdit}
			disabled={!todo.isEdit}
			onKeyDown={event => event.key === 'Enter' && editTodo(todos, todo._id)}
			placeholder={placeholder}
			onBlur={e => {
				editTodo(todos, todo._id);
				e.stopPropagation();
			}}
		/>
	);
};

export default TodoInput;
