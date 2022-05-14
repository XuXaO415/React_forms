import React from 'react';
import UserForm from './UserForm';
import ShoppingList from './ShoppingList';
import SimpleForm from './SimpleValidation';
import './App.css';

function App() {
  return (
    <div className='App'>
      <UserForm />
      <ShoppingList />
      <SimpleForm />
 
    </div>
  )
}

export default App;