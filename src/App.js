import React from 'react';
import UserForm from './UserForm';
import ShoppingList from './ShoppingList';
import Item from './Item';
import './App.css';

function App() {
  return (
    <div className='App'>
      <UserForm />
      <ShoppingList />
    </div>
  )
}

export default App;