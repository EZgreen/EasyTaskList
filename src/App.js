import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Quick To Do</h1>
      <TodoList />
    </div>
  );
}

export default App;
