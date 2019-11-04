import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Header(): JSX.Element {
  return <Heading>Todo List</Heading>;
}

export default Header;
