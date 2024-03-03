export function TodoItem ({ id, title, createdAt, deleteTodo }) {
  return (
    <li className='bg-neutral-100 p-2 rounded-md shadow-md'>
      <div className='mb-3'>
        <span className='text-sm font-medium tracking-wide'>Title:</span>
        <h3 className='text-lg leading-5'>{title}</h3>
      </div>

      <div className='mb-3'>
        <span className='text-sm font-medium tracking-wide'>Created At:</span>
        <h3 className='text-lg leading-5'>{createdAt}</h3>
      </div>

      <footer className='grid grid-cols-2 gap-5'>
        <button className='text-white bg-green-500 hover:bg-green-600 transition-colors px-4 py-1 rounded-lg'>
          Complete
        </button>
        <button onClick={() => deleteTodo(id)} className='text-white bg-red-500 hover:bg-red-600 transition-colors px-4 py-1 rounded-lg'>
          Delete
        </button>
      </footer>
    </li>
  )
}

export default TodoItem
