import React, { useState } from 'react';
import styled from 'styled-components';


import SortableComponent from './SortableComponent';
import AppMenuBar from './AppMenuBar';
//import logo from './logo.svg';
import './App.css';

const Container = styled.div``;

export enum Phases {
  AddingItems,
  Voting,
  Results
}

const App: React.FC = () => {
  const [items, setItems] = useState(["Pizza", "Burgers", "Shakes", "Indian", "Ice Cream", ]);
  const [remaining, setRemaining] = useState(20);
  const [phase, setPhase] = useState(Phases.AddingItems);

  if (remaining === 0 && phase !== Phases.Results) {
    setPhase(phase+1);
    if (phase !== Phases.Results - 1) {
      setRemaining(20);
    }
  }

  return (
    <Container className="App">
      {/* <header className="App-header">
      </header> */}
      <SortableComponent items={items} setItems={setItems} phase={phase} />
      <AppMenuBar items={items} setItems={setItems} remaining={remaining} setRemaining={setRemaining} phase={phase} />
    </Container>
  );
}

export default App;
