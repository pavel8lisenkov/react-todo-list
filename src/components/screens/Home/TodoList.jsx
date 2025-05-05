import { nanoid } from 'nanoid';
import TodoItem from './Home/Item/TodoItem';
import Title from './Title';

const TodoList = ({ todos, setTodos }) => {
	const notCompletedTodos = todos.filter(todo => !todo.isCompleted);
	const completedTodos = todos.filter(todo => todo.isCompleted);

	return (
		<>
			{notCompletedTodos.length > 0 && (
				<>
					<Title>Список задач</Title>
					{notCompletedTodos.map(todo => (
						<TodoItem
							key={nanoid()}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
						/>
					))}
				</>
			)}
			{completedTodos.length > 0 && (
				<>
					<Title>Выполненные задачи</Title>
					{completedTodos.map(todo => (
						<TodoItem
							key={nanoid()}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
						/>
					))}
				</>
			)}
			{notCompletedTodos.length === 0 && completedTodos.length === 0 && (
				<span className='flex justify-center'>Список задач пуст</span>
			)}
		</>
	);
};

export default TodoList;
