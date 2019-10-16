import React, { Fragment, useState } from 'react';
import { Todo } from './interfaces/Todo';

type FormElem = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // useState is expecting an array of interface Todos

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    addTodo(value);
    setValue(''); // Turns value in input to empty string.
  };

  const addTodo = (text: string): void => {
    const newTodos: Todo[] = [...todos, { text, complete: false }]; // spread operator brings in previous toods. new array for new todos
    setTodos(newTodos);
  };

  // completeTodo takes an argument of index dos array called, newTodos
  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = todos;
    newTodos[index].complete = !newTodos[index].complete;
    // toggle the complete property in the object of our todo by using index to locate it.
    setTodos(newTodos);
    // set object as our new todo array with the setTodos function.
  };

  console.log(todos);

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: Todo, index: number) => (
          <div key={index}>
            <div>{todo.text}</div> // The todo item from the array of Type,
            Todo, and an index of type number.
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
          </div>
        ))}
      </section>
    </Fragment>
  );
}

export default App;
