import React from 'react';
import './App.css';
import TodoList from './Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Timer';

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;
