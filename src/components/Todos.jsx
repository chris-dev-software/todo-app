import TodoItem from './TodoItem'

export function Todos ({ todos, deleteTodo }) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {
        todos.map(todo => {
          return (
            <TodoItem
              deleteTodo={deleteTodo}
              key={todo.id}
              id={todo.id}
              title={todo.title}
              createdAt={todo.createdAt}
            />
          )
        })
      }
    </ul>
  )
}
