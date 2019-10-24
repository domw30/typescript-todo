import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');
    font-family: 'Fredoka One', cursive;
    font-size: 1.3rem;
    margin: 0;
    padding: 0rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #4c4c4c;
    color: #f3f2f2;
}
`;

export { GlobalStyles };
