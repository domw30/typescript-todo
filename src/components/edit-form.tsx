import React, { FC } from 'react';
import EditInput from '../components/edit-input';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
`;

interface EditFormProps {
  onSubmit: any;
  onChange: any;
  value: any;
}

const TodoForm: FC<EditFormProps> = ({ onSubmit, onChange, value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <EditInput onChange={onChange} value={value} />
      <CreateButton />
    </Form>
  );
};

export default EditForm;
