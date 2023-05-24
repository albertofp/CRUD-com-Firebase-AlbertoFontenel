import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection } from 'firebase/firestore'
import { createTodo, db } from '../../firebase'
import { useAuth } from '../context/AuthContext'

type Props = {}

const schema = z.object({
	title: z.string().min(1).max(50)
})

type FormData = z.infer<typeof schema>

function AddTodo({}: Props) {
	const { currentUser } = useAuth()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(schema)
	})

	const submitForm = async (formValues: FormData, e: any) => {
		e.preventDefault()
		createTodo(formValues.title, currentUser!.uid)
		reset()
	}

	return (
		<form
			className='flex gap-2 items-center'
			onSubmit={handleSubmit(submitForm)}
		>
			<input
				className='p-2 rounded bg-slate-50 border-slate-300 border'
				placeholder='Write a TODO'
				type='text'
				{...register('title', { required: true })}
			></input>
			<button
				type='submit'
				className='flex mx-auto text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg'
			>
				ADD TODO
			</button>
		</form>
	)
}

export default AddTodo
