import { Todos } from '../components/Todos'

export function ContainerTodos ({ todos, deleteTodo, changeCompleteTask }) {
  return (
    <ul>
      {
        todos.length > 0
          ? <Todos todos={todos} deleteTodo={deleteTodo} changeCompleteTask={changeCompleteTask} />
          : <p>No Tasks</p>
      }
    </ul>
  )
}
