import { Trash2 } from 'lucide-react'
import { deleteTodo } from '../../firebase'
import { DocumentData } from 'firebase/firestore'

function Todo({ todo }: DocumentData) {
	return (
		<li className='border-2 flex justify-between items-center p-4 min-w-[350px] w-1/3 rounded-sm shadow-sm self-center hover:translate-x-3 transition-all bg-slate-50'>
			<div className='flex gap-2'>
				<input type='checkbox' className='w-4'></input>
				<h3 className='text-xl'>{todo.title}</h3>
			</div>
			<div className='flex flex-col gap-1'>
				<Trash2
					fill='orange'
					cursor='pointer'
					onClick={() => deleteTodo(todo.id)}
				/>
			</div>
		</li>
	)
}

export default Todo
