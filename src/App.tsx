import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault(); // prevents the form from doing a refresh.
    setValue(''); // Turns value in input to empty string.
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
}

export default App;
