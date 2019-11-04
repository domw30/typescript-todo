// import React, { useState, useRef, useEffect } from 'react';
// import { Todo } from '../interfaces/todo';
// import addTodo from '../components/app';

// function TodoForm(): JSX.Element {
//   const [inputValue, setValue] = useState<string>('');
//   const [todos, setTodos] = useState<Todo[]>([]);

//   return (
//     <div>
//       <form
//         barOpened={barOpened}
//         onClick={() => {
//           setBarOpened(true);
//           inputFocus.current.focus();
//         }}
//         onSubmit={handleSubmit}
//         ref={formRef}
//       >
//         <button type="submit" barOpened={barOpened}>
//           icon goes here
//         </button>
//         <input
//           onChange={e => setValue(e.target.value)}
//           ref={inputFocus}
//           value={inputValue}
//           barOpened={barOpened}
//           placeholder="Enter Todo"
//         />
//       </form>
//     </div>
//   );
// }

// export default TodoForm;
