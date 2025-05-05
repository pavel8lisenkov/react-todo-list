import React, { useEffect, useState } from 'react';
import CreateTodoField from './Home/createTodoField/CreateTodoField';
import Title from './Title';
import TodoList from './TodoList';

const data = JSON.parse(localStorage.getItem('Список задач')) || [];

const Home = () => {
	const [todos, setTodos] = useState(data);

	useEffect(() => {
		localStorage.setItem('Список задач', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className=' text-white w-4/5 mx-auto'>
			<Title>Приложение список задач</Title>
			<CreateTodoField todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Home;
