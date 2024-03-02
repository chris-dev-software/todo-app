import React from 'react'
import Header from './components/Header'
import Options from './components/Options'
import { RiAddCircleLine } from 'react-icons/ri'

function App () {
  return (
    <div className='p-2'>
      <Header />
      <main />
      <Options />
      <button>
        <RiAddCircleLine className='text-4xl' />
      </button>
    </div>

  )
}

export default App
