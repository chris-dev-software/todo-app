import React, { useEffect, useState } from 'react'

import { ContainerTodos } from './pages/ContainerTodos'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Options } from './components/Options'
import { Create } from './pages/Create'

function App () {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')

  const handleChangeSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)
  }

  const finalTodos = [...todos].filter(todo => todo.title.toLowerCase().includes(search))

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

  const changeCompleteTask = (id) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo => {
        if (todo.id !== id) return todo
        todo.completed = !todo.completed
        return todo
      })
      return newTodos
    })
  }

  const completedTodos = finalTodos.filter(todo => todo.completed)
  const incompletedTodos = finalTodos.filter(todo => !todo.completed)

  const completedTodosLength = todos.filter(todo => todo.completed).length
  const allTodosLength = todos.length

  return (
    <BrowserRouter>
      <div className='bg-black min-h-screen'>
        <Header handleChangeSearch={handleChangeSearch} search={search} completedTodosLength={completedTodosLength} allTodosLength={allTodosLength} />

        <main className='max-w-lg mx-auto p-5 pb-[106px]'>
          <Routes>
            <Route
              index
              element={
                <ContainerTodos
                  changeCompleteTask={changeCompleteTask}
                  deleteTodo={deleteTodo}
                  todos={finalTodos}
                />
              }
            />

            <Route
              path='/completed'
              element={
                <ContainerTodos
                  changeCompleteTask={changeCompleteTask}
                  deleteTodo={deleteTodo}
                  todos={completedTodos}
                />
              }
            />

            <Route
              path='/incompleted'
              element={
                <ContainerTodos
                  changeCompleteTask={changeCompleteTask}
                  deleteTodo={deleteTodo}
                  todos={incompletedTodos}
                />
              }
            />

            <Route
              path='/create'
              element={
                <Create
                  createNewTodo={createNewTodo}
                />
              }
            />
          </Routes>
        </main>
        <Options />
      </div>
    </BrowserRouter>
  )
}

export default App
