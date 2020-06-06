import React from 'react';
import { Header } from './components/Header';
import { TodoContextProvider } from './contexts/TodoContext';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoSearch } from './components/TodoSearch';


function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <TodoSearch />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
