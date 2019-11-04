import styled, { css } from 'styled-components';
import { TodoItemProps } from '../interfaces/todo-item-props';

export const TodoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
`;

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

export const TodoInput = styled.input`
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

export const CompleteButton = styled.button`
  background-color: #4c4c4c;
  cursor: pointer;
  padding: 0.2rem;
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

// style component based on the value of property
export const TodoListItem = styled.div<TodoItemProps>`
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
