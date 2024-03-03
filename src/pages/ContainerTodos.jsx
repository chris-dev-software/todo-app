import { Todos } from '../components/Todos'

export function ContainerTodos ({ todos, deleteTodo }) {
  return (
    <ul>
      {
        todos.length > 0
          ? <Todos todos={todos} deleteTodo={deleteTodo} />
          : <p>No Tasks</p>
      }
    </ul>
  )
}
