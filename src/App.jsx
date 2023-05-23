import './App.css'
import AddTodo from './components/AddTodo'
import TodoContainer from './components/TodoContainer'
import Login from './components/Login'
import { auth } from '../firebase'

export default function App() {
	return (
		<main className='flex flex-col items-center justify-center w-full h-[100dvh] bg-slate-100'>
			<h1 className='p-2 font-bold text-4xl mb-1 mt-4'>My Todo List</h1>
			{auth.currentUser?.email ? (
				<>
					<div className='flex gap-2 items-center'>
						<h2 className='p-2 text-xl mb-2'>{auth.currentUser.email}</h2>
						<button className='flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-sm'>
							Log out
						</button>
					</div>
					<AddTodo />
					<TodoContainer />
				</>
			) : (
				<Login />
			)}
		</main>
	)
}
