import styled, { css } from 'styled-components';
import { Todo } from 'interfaces/todo';

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 0.5rem;
  overflow-y: auto;
`;

export const TodoList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CompleteButton = styled.button`
  background-color: #4c4c4c;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 10%;
  :hover {
    background-color: #f3f2f2;
    opacity: 0.4;
  }
`;

export const DeleteButton = styled.button`
  background-color: #4c4c4c;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 10%;
  :hover {
    background-color: #f3f2f2;
    opacity: 0.4;
  }
`;

export const EditButton = styled.button`
  background-color: #4c4c4c;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 10%;
  :hover {
    background-color: #f3f2f2;
    opacity: 0.4;
  }
`;

export const EditInput = styled.input`
  margin: 0.5rem;
  border: solid;
  border-color: #f3f2f2;
  display: flex;
  width: auto;
  justify-content: center;
  font-family: 'Fredoka One', cursive;
  font-size: 1.3rem;
  background-color: #4c4c4c;
  color: #f3f2f2;
  text-align: center;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
`;

// style component based on the value of property
export const TodoListItem = styled.div<Todo>`
  ${props =>
    props.complete &&
    css`
      text-decoration: line-through;
      color: #f3f2f2;
      opacity: 0.6;
    `}
  margin: .5rem;
  border: solid;
  width: 30%;
  display: flex;
  justify-content: center;
`;
