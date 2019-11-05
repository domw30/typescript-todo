import React, { Fragment, useState } from 'react';
import { Todo } from '../interfaces/todo';
import { GlobalStyles } from '../styles/global-styles';
import { DeleteIcon, CheckIcon } from '../styles/icons';
import {
  TodoListWrapper,
  TodoListItem,
  CompleteButton,
  DeleteButton,
  TodoList,
} from '../styles/styles';
import Header from './header';
import TodoForm from './todo-form';

function App(): JSX.Element {
  const [inputValue, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(inputValue);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const addTodo = (text: string): void => {
    const newTodos: Todo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <TodoForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={inputValue}
      />
      <TodoListWrapper>
        {todos
          .map((todo: Todo, index: number) => (
            <TodoList key={index}>
              <TodoListItem data-type="todo-item" complete={todo.complete}>
                {todo.text}
              </TodoListItem>
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
