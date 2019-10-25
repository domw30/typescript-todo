import React, { Fragment, useState } from 'react';
import { Todo } from '../interfaces/todo';
import { GlobalStyles } from '../styles/global-styles';
import { DeleteIcon, CheckIcon, AddIcon } from '../styles/icons';
import {
  TodoHeading,
  TodoForm,
  TodoInput,
  CreateButton,
  TodoListWrapper,
  TodoListItem,
  CompleteButton,
  DeleteButton,
  TodoList,
  Header,
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
      <Header>
        <TodoHeading>Todo List</TodoHeading>
      </Header>
      <TodoForm onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          placeholder="Enter Todo"
          value={inputValue}
          onChange={handleChange}
          required={true}
        />
        <CreateButton type="submit" data-type="add-button">
          <AddIcon />
        </CreateButton>
      </TodoForm>
      <TodoListWrapper>
        {todos
          .map((todo: Todo, index: number) => (
            <TodoList key={index}>
              <TodoListItem complete={todo.complete}>{todo.text}</TodoListItem>
              <CompleteButton
                type="button"
                data-type="check-button"
                onClick={(): void => completeTodo(index)}
              >
                <CheckIcon />
              </CompleteButton>
              <DeleteButton
                type="button"
                data-type="delete-button"
                onClick={(): void => removeTodo(index)}
              >
                <DeleteIcon />
              </DeleteButton>
            </TodoList>
          ))
          .reverse()}
      </TodoListWrapper>
    </Fragment>
  );
}

export default App;
