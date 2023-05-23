import { Trash2 } from 'lucide-react'

type Props = {}

function Todo({}: Props) {
	return (
		<div className='border flex justify-between items-center p-4 min-w-[350px] w-1/3 rounded-sm shadow-sm self-center'>
			<div className=''>
				<h3 className='text-xl'>Title</h3>
				<h4 className='font-light'>Subtitle</h4>
			</div>
			<Trash2
				fill='lightgray'
				cursor='pointer'
			/>
		</div>
	)
}

export default Todo
