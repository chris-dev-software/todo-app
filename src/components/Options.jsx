import React from 'react'
import { RiCheckLine, RiCloseLine, RiHome2Line } from 'react-icons/ri'

function Options () {
  return (
    <footer className='fixed left-0 right-0 bottom-0 w-full grid grid-cols-3 max-w-xl mx-auto'>
      <button className='text-sm flex flex-col sm:flex-row sm:gap-5 justify-center items-center p-2 cursor-pointer hover:bg-neutral-200 transition-colors'>
        <RiCheckLine />
        Complete
      </button>
      <button className='text-sm bg-teal-600 flex flex-col sm:flex-row sm:gap-5 justify-center items-center p-2 cursor-pointer transition-colors'>
        <RiHome2Line />
        Home
      </button>
      <button className='text-sm flex flex-col sm:flex-row sm:gap-5 justify-center items-center p-2 cursor-pointer hover:bg-neutral-200 transition-colors'>
        <RiCloseLine />
        Incomplete
      </button>
    </footer>
  )
}

export default Options
