import { useEffect, useState } from 'react'
import Todo from './Todo'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { DocumentData } from '@firebase/firestore-types'
import { useAuth } from '../context/AuthContext'
import ReactPaginate from 'react-paginate'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, GripHorizontal } from 'lucide-react'

function TodoContainer() {
	const { currentUser } = useAuth()
	const [todos, setTodos] = useState<DocumentData[]>([])
	const [pageNumber, setPageNumber] = useState(0)
	const TODOS_PER_PAGE = 6
	const pagesVisited = pageNumber * TODOS_PER_PAGE
	const currentTodos = todos.slice(pagesVisited, pagesVisited + TODOS_PER_PAGE)

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
							delay: index * 0.25
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
			{todos.length == 0 ?? (
				<h1 className='text-4xl opacity-25'>Nothing to do</h1>
			)}
			<ul className='flex flex-col gap-2 mt-10 w-full items-center h-1/2'>
				{displayTodos}
			</ul>
			<ReactPaginate
				pageCount={Math.ceil(todos.length / TODOS_PER_PAGE)}
				previousLabel={<ArrowLeft />}
				nextLabel={<ArrowRight />}
				onPageChange={({ selected }) => setPageNumber(selected)}
				className='flex gap-2 justify-evenly items-center'
				pageClassName='font-light p-2 rounded-full text-2xl'
				activeLinkClassName='font-bold p-2 rounded-full text-2xl'
				breakLabel={<GripHorizontal />}
				breakClassName='font-light p-2 rounded-full text-2xl'
				breakLinkClassName='font-light p-2 rounded-full text-2xl'
				disabledLinkClassName='opacity-10'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default TodoContainer
