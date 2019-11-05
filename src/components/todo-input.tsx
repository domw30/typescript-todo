import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
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

interface TodoInputProps {
  onChange?: any;
  value: any;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const TodoInput: FC<TodoInputProps> = ({ onChange, value }) => {
  return (
    <Input
      type={'text'}
      placeholder={'Enter Todo'}
      onChange={onChange}
      required={true}
      value={value}
    />
  );
};

export default TodoInput;
