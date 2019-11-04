import CreateButton from './create-button';
import React from 'react';
import styled from 'styled-components';
import handleChange from '../components/app';

const TodoInput = styled.input`
  background-color: #f3f2f2;
  border: none;
  width: 50%;
  opacity: 0.6;
  text-align: center;
  color: #fe7575;
  :hover {
    background-color: #f3f2f2;
    opacity: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
`;

function TodoForm(): JSX.Element {
  return (
    <Form>
      <TodoInput
        type="text"
        placeholder="Enter Todo"
        onChange={handleChange}
        required={true}
      />
      <CreateButton />
    </Form>
  );
}

export default TodoForm;
