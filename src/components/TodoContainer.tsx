import { useEffect, useState } from 'react'
import Todo from './Todo'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { DocumentData } from '@firebase/firestore-types'
import { useAuth } from '../context/AuthContext'

function TodoContainer() {
	const { currentUser } = useAuth()

	const [todos, setTodos] = useState<DocumentData[]>([])

	useEffect(() => {
		const getTodos = query(
			collection(db, 'todos'),
			where('userID', '==', currentUser?.uid)
		)
		const unsubscribe = onSnapshot(getTodos, (QuerySnapshot) => {
			let todosArray: DocumentData[] = []
			QuerySnapshot.forEach((document: DocumentData) => {
				todosArray.push({ ...document.data(), id: document.id })
			})
			setTodos(todosArray)
		})
	}, [])

	return (
		<ul className='flex flex-col gap-2 mt-10 w-full'>
			{todos.map((todo, index) => (
				<Todo
					key={index}
					todo={todo}
				/>
			))}
		</ul>
	)
}

export default TodoContainer
