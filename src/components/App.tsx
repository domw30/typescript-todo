import React, { Fragment, useState } from 'react';
import { Todo } from '../interfaces/Todo';
import {
  Wrapper,
  Heading,
  BodyWrapper,
  Button,
  Section,
} from '../styles/styles';
import { GlobalStyles } from '../styles/global-styles';

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); // useState is expecting an array of interface Todos

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    addTodo(value);
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
      <Wrapper>
        <Heading>Todo List</Heading>
        <BodyWrapper>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Todo"
              value={value}
              onChange={handleChange}
              required={true}
            />
            <Button type="submit">Add Todo</Button>
          </form>
          <Section>
            {todos.map((todo: Todo, index: number) => (
              <div key={index} style={{ display: 'flex' }}>
                <div
                  style={{
                    textDecoration: todo.complete ? 'line-through' : '',
                  }}
                >
                  {todo.text}
                </div>
                <Button type="button" onClick={(): void => completeTodo(index)}>
                  {todo.complete ? 'Incomplete' : 'Complete'}
                </Button>
                <Button onClick={(): void => removeTodo(index)}>X</Button>
              </div>
            ))}
          </Section>
        </BodyWrapper>
      </Wrapper>
    </Fragment>
  );
}

export default App;
