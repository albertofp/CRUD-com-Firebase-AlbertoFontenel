import React from 'react'
import Todo from './Todo'

type Props = {}

function TodoContainer({}: Props) {
	return (
		<div className='flex flex-col gap-2 mt-10 w-full'>
			<Todo />
			<Todo />
			<Todo />
			<Todo />
		</div>
	)
}

export default TodoContainer