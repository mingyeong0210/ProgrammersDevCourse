import React from 'react';
import './App.css';
import TodoList from './Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      {/* <Clock></Clock> */}
      <MyWeather weather='맑음'>일기예보</MyWeather>
    </div>
  );
}

export default App;
