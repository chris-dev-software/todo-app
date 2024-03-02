export function Header () {
  return (
    <header className='max-w-xl mx-auto'>
      <h1 className='text-2xl text-center font-semibold mb-2'>You completed 4 to 5 tasks</h1>

      <form className='grid grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 gap-1'>
        <input
          type='text'
          placeholder='Busca la tarea'
          className='outline-none border rounded-md px-1.5 py-0.5 w-full sm:col-span-2'
        />
        <button className='bg-teal-800 text-white px-2 py-1 rounded-md'>
          Buscar
        </button>
      </form>

    </header>
  )
}
