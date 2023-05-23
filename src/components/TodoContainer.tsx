import { useEffect, useState } from 'react'
import Todo from './Todo'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { DocumentData } from '@firebase/firestore-types'
import { useAuth } from '../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'

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

		return unsubscribe
	}, [])

	return (
		<ul className='flex flex-col gap-2 mt-10 w-full items-center'>
			{todos.map((todo, index) => (
				<AnimatePresence>
					<motion.div
						className='flex flex-col'
						key={index}
						variants={{
							hidden: {
								opacity: 0
							},
							visible: (index) => ({
								opacity: 1,
								transition: {
									delay: index * 0.1
								}
							})
						}}
						custom={{ index }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Todo
							key={index}
							todo={todo}
						/>
					</motion.div>
				</AnimatePresence>
			))}
		</ul>
	)
}

export default TodoContainer
