import './App.css'
import AddTodo from './components/AddTodo'
import TodoContainer from './components/TodoContainer'
import Login from './components/Login'
import { auth } from '../firebase'
import { AuthProvider } from './context/AuthContext'
import MainContainer from './components/MainContainer'

export default function App() {
	return (
		<AuthProvider>
			<main className='flex flex-col items-center justify-center w-full h-[100dvh] bg-slate-100'>
				<h1 className='p-2 font-bold text-4xl mb-1 mt-4'>My Todo List</h1>
				<MainContainer />
			</main>
		</AuthProvider>
	)
}
