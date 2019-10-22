import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
    @import url('https://fonts.googleapis.com/css?family=Srisakdi&display=swap');
    font-family: 'Srisakdi', cursive;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    width: 100%;
}
`;

export { GlobalStyles };
