import React from 'react'

type Props = {}

function Form({}: Props) {
  return (
    <div className='flex gap-2 items-center'>
        <input placeholder='Write a TODO'></input>
        <button className='rounded-lg bg-gray-300 p-2 shadow-sm border font-light'>ADD TODO</button>
    </div>
  )
}

export default Form