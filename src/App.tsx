import React from 'react';
import logo from './logo.svg';
import './App.css';

const candidates:string[] = ['Pizza', 'Burgers', 'Wings'];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {candidates.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
