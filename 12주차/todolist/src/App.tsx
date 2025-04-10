import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <TodoList></TodoList>
      {/* <MapTest></MapTest> */}
    </div>
  );
}

export default App;
