import React from 'react'

import { Home } from './pages/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import Options from './components/Options'
import { Completed } from './pages/Completed'
import { Incompleted } from './pages/Incompleted'
import { Create } from './pages/Create'

function App () {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/completed' element={<Completed />} />
        <Route path='/incompleted' element={<Incompleted />} />
        <Route path='/create' element={<Create />} />
      </Routes>

      <Options />
    </BrowserRouter>
  )
}

export default App
