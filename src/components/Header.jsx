import { RiSearch2Line } from 'react-icons/ri'

export function Header ({ completedTodosLength, allTodosLength, handleChangeSearch, search }) {
  return (
    <header className='max-w-lg mx-auto p-5 sticky top-0 bg-black z-10'>
      <h1 className='text-2xl text-center uppercase font-semibold mb-2 flex flex-col text-white'>
        <span>You completed</span>
        <span>{completedTodosLength} to {allTodosLength} tasks</span>
      </h1>

      <form className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 text-neutral-700 border border-neutral-700 transition-colors rounded-md px-2 py-1 focus-within:border-neutral-500 focus-within:text-neutral-500'>
          <RiSearch2Line className='text-xl' />
          <input
            value={search}
            onChange={handleChangeSearch}
            type='text'
            placeholder='Search...'
            className='w-full outline-none bg-transparent text-white placeholder:text-neutral-700'
          />
        </div>
        <button className='outline-none rounded-md p-2 text-white bg-white/10 hover:bg-white/15 transition-colors'>
          Buscar
        </button>
      </form>

    </header>
  )
}
