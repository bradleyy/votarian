import React from 'react';
import styled from 'styled-components';

import SortableComponent from './SortableComponent';
//import logo from './logo.svg';
import './App.css';

  // width: 400px;
  // margin: 30px auto;
  // font-family: ${fontFamily};
  // font-size: ${fontSize};
  // color: ${gray2};
  const Container = styled.div`
  ul {
    list-style: none;
    padding: 0px 20px;
    background-color: #fff;
    color: #000;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid #9b8dab;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  }
`;
const App: React.FC = () => {
  return (
    <Container className="App">
      <header className="App-header">
        <SortableComponent />
      </header>
    </Container>
  );
}

export default App;
