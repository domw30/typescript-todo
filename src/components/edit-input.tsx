import React, { FC } from 'react';
import styled from 'styled-components';

interface EditInputProps {
  onChange?: any;
  value: any;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Input = styled.input`
  margin: 0.5rem;
  border: solid;
  width: 30%;
  display: flex;
  justify-content: center;
  color: #f3f2f2;
  background-color: #4c4c4c;
  font-family: 'Fredoka One', cursive;
  font-size: 1.3rem;
  text-align: center;
`;

const EditInput: FC<EditInputProps> = ({ onChange, value }) => {
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

export default EditInput;
