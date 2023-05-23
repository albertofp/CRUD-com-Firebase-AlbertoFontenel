import React from 'react'

type Props = {}

function Form({}: Props) {
	return (
		<div className='flex gap-2 items-center'>
			<input placeholder='Write a TODO'></input>
			<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
				ADD TODO
			</button>
		</div>
	)
}

export default Form
