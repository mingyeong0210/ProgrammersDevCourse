import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <ClassCom></ClassCom>
      <FuncCom></FuncCom>
    </div>
  );
}

export default App;
