export function Header () {
  return (
    <header className='max-w-lg mx-auto p-5'>
      <h1 className='text-2xl text-center font-semibold mb-2 text-neutral-700'>You completed 4 to 5 tasks</h1>

      <form className='flex flex-col gap-2'>
        <input
          type='text'
          placeholder='Busca la tarea'
          className='outline-none border rounded-md px-3.5 py-2.5'
        />
        <button className='bg-teal-800 text-white px-3 py-2 rounded-md'>
          Buscar
        </button>
      </form>

    </header>
  )
}
