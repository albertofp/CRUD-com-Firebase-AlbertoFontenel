import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {}

const schema = z.object({
	title: z.string().min(1).max(50)
})

type FormData = z.infer<typeof schema>

function AddTodo({}: Props) {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(schema)
	})

	const submitForm = (formValues: FormData, e: any) => {
		e.preventDefault()
		console.log(`formValues: ${formValues.title}`)
		reset()
	}

	return (
		<form
			className='flex gap-2 items-center'
			onSubmit={handleSubmit(submitForm)}
		>
			<input
				className='p-2 rounded'
				placeholder='Write a TODO'
				type='text'
				{...register('title', {required: true})}
			></input>
			<button
				type='submit'
				className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
			>
				ADD TODO
			</button>
		</form>
	)
}

export default AddTodo
