import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PageHeading(): JSX.Element {
  return <Heading>Todo List</Heading>;
}

export default PageHeading;
