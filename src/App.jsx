import React, { useState } from 'react'

import { ContainerTodos } from './pages/ContainerTodos'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Options } from './components/Options'
import { Create } from './pages/Create'

function App () {
  const [todos, setTodos] = useState([])

  const createNewTodo = (newTodo) => {
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.filter(todo => todo.id !== id)
      return newTodos
    })
  }

  const completedTodos = todos.filter(todo => todo.completed)
  const incompletedTodos = todos.filter(todo => !todo.completed)

  return (
    <BrowserRouter>
      <Header />

      <main className='max-w-lg mx-auto p-5'>
        <Routes>
          <Route index element={<ContainerTodos deleteTodo={deleteTodo} todos={todos} />} />
          <Route path='/completed' element={<ContainerTodos deleteTodo={deleteTodo} todos={completedTodos} />} />
          <Route path='/incompleted' element={<ContainerTodos deleteTodo={deleteTodo} todos={incompletedTodos} />} />
          <Route path='/create' element={<Create createNewTodo={createNewTodo} />} />
        </Routes>
      </main>
      <Options />
    </BrowserRouter>
  )
}

export default App
