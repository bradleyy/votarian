import React, { useState } from 'react';
import { QRCode } from "react-qr-svg";
import styled from 'styled-components';
import {observer} from 'mobx-react';

import Candidates from './Candidates'
import SortableComponent from './SortableComponent';
import AppMenuBar from './AppMenuBar';
//import logo from './logo.svg';
import './App.css';
import WinnerPopup from './WinnerPopup';

const Container = styled.div``;

export enum Phases {
  Nomination,
  Voting,
  Results
}

const candidates = new Candidates(["Pizza", "Burgers", "Shakes", "Indian", "Ice Cream", ])

const App: React.FC = observer(() => {
  // const [items, setItems] = useState(["Pizza", "Burgers", "Shakes", "Indian", "Ice Cream", ]);
  const [remaining, setRemaining] = useState(30);
  const [phase, setPhase] = useState(Phases.Nomination);
  const [open, setOpen] = useState(false);
  //const [winner, setWinner] = useState(items[0]);

  if (remaining === 0 && phase !== Phases.Results) {
    setPhase(phase+1);
    if (phase !== Phases.Results - 1) {
      setRemaining(30);
    } else {
      setOpen(true);
    }
  }
  const showQR = true;
  return (
    <Container className="App">
      {/* <header className="App-header">
      </header> */}
      {showQR ? <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value="some text"
            />
      : ""}
      <SortableComponent candidates={candidates} phase={phase} />
      <AppMenuBar candidates={candidates} remaining={remaining} setRemaining={setRemaining} phase={phase} />
      <WinnerPopup winner={candidates.winner} open={open} setOpen={setOpen} />
    </Container>
  );
});

export default App;
