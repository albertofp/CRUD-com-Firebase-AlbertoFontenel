import { useEffect, useState } from 'react'
import Todo from './Todo'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { DocumentData } from '@firebase/firestore-types'
import { useAuth } from '../context/AuthContext'
import ReactPaginate from 'react-paginate'
import { motion, AnimatePresence } from 'framer-motion'

function TodoContainer() {
	const { currentUser } = useAuth()

	const [todos, setTodos] = useState<DocumentData[]>([])
	const [loading, setLoading] = useState(false)
	const [pageNumber, setPageNumber] = useState(0)

	const TODOS_PER_PAGE = 6
	const pagesVisited = pageNumber * TODOS_PER_PAGE
	const currentTodos = todos.slice(pagesVisited, pagesVisited + TODOS_PER_PAGE)

	useEffect(() => {
		setLoading(true)
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
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	const displayTodos = currentTodos.map((todo, index) => (
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
	))

	return (
		<>
			<ul className='flex flex-col gap-2 mt-10 w-full items-center'>
				{displayTodos}
			</ul>
			<ReactPaginate
				pageCount={Math.ceil(todos.length / TODOS_PER_PAGE)}
				previousLabel={'Previous'}
				nextLabel={'Next'}
				onPageChange={({ selected }) => setPageNumber(selected)}
			/>
		</>
	)
}

export default TodoContainer
