import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Create ({ createNewTodo }) {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

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
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white/5  p-4 rounded-md'>
      <h1 className='text-3xl mb-5 text-center text-white'>Create a Task</h1>

      <div className='flex flex-col gap-1 mb-5'>
        <label
          htmlFor='title'
          className='text-sm font-medium tracking-wider text-white'
        >Title:
        </label>
        <input
          id='title'
          type='text'
          value={title}
          placeholder='Write a title'
          onChange={(e) => setTitle(e.target.value)}
          className='outline-none border px-4 py-2 rounded-md bg-transparent border-neutral-700 focus:border-neutral-500 text-white placeholder:text-neutral-700'
        />
      </div>

      <button className='outline-none rounded-md py-2 px-10 text-white bg-white/10 hover:bg-white/15 transition-colors ml-auto block'>Create</button>
    </form>
  )
}
