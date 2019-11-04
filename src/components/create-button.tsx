import React from 'react';
import { AddIcon } from '../styles/icons';
import styled, { keyframes } from 'styled-components';

export const Rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
}`;

export const Button = styled.button`
  animation: ${Rotate} 2s infinite linear;
  background-color: #4c4c4c;
  cursor: pointer;
  border: none;
  border-radius: 10%;
  margin: 0.5rem;
  :hover {
    background-color: #f3f2f2;
    opacity: 0.4;
  }
`;

function CreateButton(): JSX.Element {
  return (
    <Button type="submit" data-type="add-button">
      <AddIcon />
    </Button>
  );
}

export default CreateButton;
