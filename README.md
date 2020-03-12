## TODO APP

<img width="920" alt="Screenshot 2019-10-25 at 16 07 11" src="https://user-images.githubusercontent.com/39112648/67582363-8fdbea80-f741-11e9-808f-abe43a4a45fc.png">


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To Use

Run 'yarn install' to install dependencies.

Run 'yarn start' to kickoff build and visit http://localhost:3000.

### End to End Testing

Run 'yarn cypress open' to open cypress window.

Select 'init.spec.ts' an option under integration tests.

This opens http://localhost:3000 in the browser which records the tests.

### Integration / Unit Testing

Run 'yarn test'.

In the terminal you will see a display of tests.

### User Stories

```
As a busy person with a bad memory,
So that I can record tasks that needs completing,
I'd like to be able to store todos.

As a busy person with a bad memory,
So that I can remind myself of tasks that need to be completed,
I'd like to be able to see a display of all todos.

As a busy person with a bad memory,
So that I can reference a task that needs to be completed,
I'd like to be able to add a new todo.

As a busy person with a bad memory,
So that I can keep track of completed tasks,
I'd like to be able to toggle a todo as complete.

As a busy person with a bad memory,
So that I can finalise a task that I have completed and forget,
I'd like to be able to delete a todo.
```

(NB: There is currently no functionality for Todos to be permanently stored. If the user refreshes the web page, the Todos will be lost)
