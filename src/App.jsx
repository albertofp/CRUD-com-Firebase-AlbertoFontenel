import './App.css'
import AddTodo from './components/AddTodo'
import TodoContainer from './components/TodoContainer'
import Login from './components/Login'



export default function App() {
	return (
		<main className='flex flex-col items-center justify-center w-full h-[100dvh] bg-slate-100'>
			<h1 className='p-2 font-bold text-4xl mb-10'>My Todo List</h1>
			<AddTodo />
			<TodoContainer />
			<Login />
		</main>
	)
}
