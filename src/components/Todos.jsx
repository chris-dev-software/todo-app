import TodoItem from './TodoItem'

export function Todos ({ todos, deleteTodo, changeCompleteTask }) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {
        todos.map(todo => {
          return (
            <TodoItem
              deleteTodo={deleteTodo}
              changeCompleteTask={changeCompleteTask}
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              createdAt={todo.createdAt}
            />
          )
        })
      }
    </ul>
  )
}
