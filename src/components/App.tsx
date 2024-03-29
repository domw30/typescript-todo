import React, { Fragment, useState } from 'react';
import { Todo } from 'interfaces/todo';
import { GlobalStyles } from 'styles/global-styles';
import { DeleteIcon, CheckIcon, EditIcon } from 'styles/icons';
import {
  TodoListWrapper,
  TodoListItem,
  CompleteButton,
  DeleteButton,
  TodoList,
  EditButton,
} from 'styles/styles';
import Header from 'components/header';
import TodoForm from 'components/todo-form';
import EditForm from 'components/edit-form';

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
    const newTodos: Todo[] = [
      ...todos,
      { text, complete: false, edited: false },
    ];
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

  const editTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].edited = !newTodos[index].edited;
    console.log(todos);
    setTodos(newTodos);
  };

  const updateTodo = (index: number) => (text: string) => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].text = text;
    newTodos[index].edited = false;
    setTodos(newTodos);
    console.log(text, index);
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
              {todo.edited ? (
                <EditForm todo={todo} updateTodo={updateTodo(index)} />
              ) : (
                <TodoListItem
                  data-type="todo-item"
                  text={todo.text}
                  complete={todo.complete}
                  edited={todo.edited}
                >
                  {todo.text}
                </TodoListItem>
              )}
              {!todo.edited ? (
                <CompleteButton
                  type="button"
                  data-type="check-button"
                  onClick={(): void => completeTodo(index)}
                >
                  <CheckIcon />
                </CompleteButton>
              ) : null}
              {!todo.edited ? (
                <DeleteButton
                  type="button"
                  data-type="delete-button"
                  onClick={(): void => removeTodo(index)}
                >
                  <DeleteIcon />
                </DeleteButton>
              ) : null}
              <EditButton
                type="button"
                data-type="edit-button"
                onClick={(): void => editTodo(index)}
              >
                <EditIcon />
              </EditButton>
            </TodoList>
          ))
          .reverse()}
      </TodoListWrapper>
    </Fragment>
  );
}

export default App;
