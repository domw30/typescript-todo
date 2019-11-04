import React, { Fragment, useState, useRef, useEffect } from 'react';
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

  const [barOpened, setBarOpened] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    if (formRef.current.contains(e.target)) {
      return;
    }
    setBarOpened(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    addTodo(inputValue);
    setValue(''); // Turns value in input to empty string.
    setBarOpened(false);
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
      <TodoForm
        onSubmit={handleSubmit}
        barOpened={barOpened}
        ref={formRef}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
      >
        <TodoInput
          type="text"
          ref={inputFocus}
          barOpened={barOpened}
          placeholder="Enter Todo"
          value={inputValue}
          onChange={handleChange}
          required={true}
        />
        <CreateButton
          type="submit"
          data-type="add-button"
          barOpened={barOpened}
        >
          <AddIcon />
        </CreateButton>
      </TodoForm>
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
