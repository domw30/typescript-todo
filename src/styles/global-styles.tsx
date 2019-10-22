import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
    @import url('https://fonts.googleapis.com/css?family=Srisakdi&display=swap');
    font-family: 'Srisakdi', cursive;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
`;

export { GlobalStyles };
