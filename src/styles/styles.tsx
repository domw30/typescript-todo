import styled from 'styled-components';

export const Heading = styled.h1`
  padding: 20px 0;
  margin: 0 30px;
  font-weight: 200;
  text-align: center;
  font-size: 2.5rem;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Wrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  opacity: 0.8;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  border-radius: 2px;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.6);
`;

export const BodyWrapper = styled.div`
  margin: 0px 150px;
  width: 40%;
  padding: 10px;
`;

export const Button = styled.button`
  background: transparent;
  color: black;
  border-color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Section = styled.section`
  padding: 10px;
`;
