import { deleteDoc } from 'firebase/firestore'
import { Edit, Trash2 } from 'lucide-react'
import { deleteTodo } from '../../firebase'

type Props = {
	title: string
	subtitle?: string
	id: string
}

function Todo({ title = 'Title', subtitle, id }: Props) {
	return (
		<li className='border-2 flex justify-between items-center p-4 min-w-[350px] w-1/3 rounded-sm shadow-sm self-center hover:translate-x-3 transition-all bg-slate-50'>
			<div className=''>
				<h3 className='text-xl'>{title}</h3>
				<h4 className='font-light'>{subtitle}</h4>
			</div>
			<div className='flex flex-col gap-1'>
				<Trash2
					fill='orange'
					cursor='pointer'
					onClick={() => deleteTodo(id)}
				/>
				<Edit
					fill='lightblue'
					cursor='pointer'
				/>
			</div>
		</li>
	)
}

export default Todo
