import CreateButton from './create-button';
import React, { FC } from 'react';
import styled from 'styled-components';
import TodoInput from '../components/todo-input';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
`;

interface TodoFormProps {
  onSubmit: any;
  onChange: any;
  value: any;
}

const TodoForm: FC<TodoFormProps> = ({ onSubmit, onChange, value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <TodoInput onChange={onChange} value={value} />
      <CreateButton />
    </Form>
  );
};

export default TodoForm;
