import { StyledEditForm, EditInput } from '../styles/styles';
import CreateButton from '../components/create-button';
import * as React from 'react';
import { Todo } from 'interfaces/todo';

interface Props {
  todo: Todo;
  updateTodo: (text: string) => void;
}

const EditForm = (props: Props): JSX.Element => {
  const [value, setValue] = React.useState<string>(props.todo.text);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.updateTodo(value);
  };

  return (
    <StyledEditForm onSubmit={handleSubmit}>
      <EditInput
        onChange={handleEditChange}
        value={value}
        data-type="edit-input"
        required={true}
        type="text"
        placeholder="Edit Todo"
      />
      <CreateButton data-type="add-button" />
    </StyledEditForm>
  );
};

export default EditForm;
