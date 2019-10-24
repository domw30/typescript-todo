import React, { Fragment, useState } from 'react';
import { Todo } from '../interfaces/Todo';
import { GlobalStyles } from '../styles/global-styles';
import { DeleteIcon, Check, Uncheck } from '../styles/icons';
import {
  TodoHeading,
  TodoForm,
  TodoInput,
  CreateButton,
  TodoList,
  TodoItem,
} from '../styles/styles';

function App(): JSX.Element {
  const [inputValue, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // useState is expecting an array of interface Todos

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    addTodo(inputValue);
    setValue(''); // Turns value in input to empty string.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    setValue(e.target.value);
  };

  const addTodo = (text: string): void => {
    const newTodos: Todo[] = [...todos, { text, complete: false }]; // spread operator brings in previous toods. new array for new todos
    setTodos(newTodos);
  };

  // completeTodo takes an argument of index dos array called, newTodos
  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    // toggle the complete property in the object of our todo by using index to locate it.
    setTodos(newTodos);
    // set object as our new todo array with the setTodos function.
  };

  const removeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <GlobalStyles />
      <TodoHeading>Todo List</TodoHeading>
      <TodoForm onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Enter Todo"
          value={inputValue}
          onChange={handleChange}
          required={true}
        />
        <CreateButton type="submit">Add Todo</CreateButton>
      </TodoForm>
      <TodoList>
        {todos
          .map((todo: Todo, index: number) => (
            <div key={index}>
              <TodoItem complete={todo.complete}>{todo.text}</TodoItem>
              {todo.complete ? (
                <Uncheck
                  type="button"
                  onClick={(): void => completeTodo(index)}
                />
              ) : (
                <Check
                  type="button"
                  onClick={(): void => completeTodo(index)}
                />
              )}

              <DeleteIcon onClick={(): void => removeTodo(index)} />
            </div>
          ))
          .reverse()}
      </TodoList>
    </Fragment>
  );
}

export default App;
