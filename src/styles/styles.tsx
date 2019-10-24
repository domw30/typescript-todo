import styled, { css } from 'styled-components';
import { TodoItemProps } from '../interfaces/todo-item-props';

export const TodoHeading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TodoList = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodoItem = styled.div<TodoItemProps>`
  ${props =>
    props.complete &&
    css`
      text-decoration: line-through;
    `}
`;

export const TodoInput = styled.input``;

export const CreateButton = styled.button``;
