import { useState } from 'react'

export function Create ({ createNewTodo }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date().toLocaleDateString(),
      completed: false
    }

    createNewTodo(newTodo)

    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-neutral-100 p-4 rounded-md'>
      <h1 className='text-3xl mb-5'>Create a Task</h1>

      <div className='flex flex-col mb-3'>
        <label
          htmlFor='title'
          className='text-sm font-medium tracking-wider'
        >Title:
        </label>
        <input
          id='title'
          type='text'
          value={title}
          placeholder='Write a title'
          onChange={(e) => setTitle(e.target.value)}
          className='outline-none border px-4 py-2 rounded-md'
        />
      </div>

      <button className='text-white bg-teal-800 hover:bg-teal-900 transition-colors px-6 py-1 rounded-md'>Create</button>
    </form>
  )
}
