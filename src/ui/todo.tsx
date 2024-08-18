import { FC } from "hono/jsx";
import { Todo } from "../domain";

export const TodoRow: FC<{ todo: Todo }> = ({ todo }) => (
  <tr>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>
      <input 
        type="checkbox"
         checked={todo.working} 
         hx-put={todo.working ? `/todos/${todo.uuid}/stop` : `/todos/${todo.uuid}/start`}
         hx-target="closest tr"
         hx-swap="outerHTML"
         />
    </td>
    <td>
      <button
        hx-put={`/todos/${todo.uuid}/status`}
        hx-vals='{"status":"archived"}'
        hx-target="closest tr"
        hx-swap="outerHTML"
      >
        Archive
      </button>
    </td>
  </tr>
);

export const TodoTable: FC<{ todos: Todo[]; id: string }> = ({ todos, id }) => (
  <table id={id} class="u-full-width">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Working?</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <TodoRow todo={todo} />
      ))}
    </tbody>
  </table>
);

export const TodoForm: FC = () => (
  <form hx-post="/todos" hx-target="#todo-active tbody" hx-swap="beforeend">
    <input type="text" name="title" placeholder="New todo" required />
    <input type="text" name="description" placeholder="Description" required />
    <button type="submit">Add</button>
  </form>
);

export const Todos: FC<{ todos: Todo[] }> = ({ todos }) => (
  <section class="container">
    <h2>#TODO</h2>
    <TodoForm />
    <TodoTable id="todo-active" todos={todos} />
  </section>
);
