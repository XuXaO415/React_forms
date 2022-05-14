import React from 'react';
import UserForm from './UserForm';
import ShoppingList from './ShoppingList';
import SimpleForm from './SimpleValidation';
import './App.css';
import SignupForm from './SimpleValidation';

function App() {
  return (
    <div className='App'>
      <UserForm />
      <ShoppingList />
      <SimpleForm />
      <SignupForm />
 
    </div>
  )
}

export default App;