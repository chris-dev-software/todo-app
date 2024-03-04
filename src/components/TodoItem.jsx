export function TodoItem ({ id, title, createdAt, deleteTodo, changeCompleteTask, completed }) {
  return (
    <li className={` border ${completed ? 'border-green-500/50 bg-green-500/5' : 'border-neutral-50/15 bg-neutral-50/15'}  p-4 rounded-md shadow-md`}>
      <div className='mb-3'>
        <span className='text-sm font-medium tracking-wide text-neutral-400'>Title:</span>
        <h3 className='text-lg leading-5 text-white'>{title}</h3>
      </div>

      <div className='mb-3'>
        <span className='text-sm font-medium tracking-wide text-neutral-400'>Created At:</span>
        <h3 className='text-lg leading-5 text-white'>{createdAt}</h3>
      </div>

      <footer className='grid grid-cols-2 gap-4'>
        <button onClick={() => changeCompleteTask(id)} className='text-white border border-green-500 bg-green-500/5 hover:bg-green-500/15 transition-colors px-2 py-1 rounded-lg'>
          Complete
        </button>
        <button onClick={() => deleteTodo(id)} className='text-white border border-red-500 bg-red-500/5 hover:bg-red-500/15 transition-colors px-2 py-1 rounded-lg'>
          Delete
        </button>
      </footer>
    </li>
  )
}

export default TodoItem
