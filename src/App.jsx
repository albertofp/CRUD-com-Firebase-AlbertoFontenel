import './App.css'
import Form from './components/Form'
import TodoContainer from './components/TodoContainer'

export default function App() {
	return (
		<main className='flex flex-col items-center justify-center w-full'>
			<h1 className='p-2 font-bold text-4xl mb-10'>My Todo List</h1>
			<Form />
			<TodoContainer />
		</main>
	)
}
