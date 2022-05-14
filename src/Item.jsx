import React, {useState} from "react";
import UserForm from "./UserForm";
import SHoppingList from "./ShoppingList";

const Item =({id, name, qty}) => {


    return (
     <ul>
         <li>Name: {name}</li>
         <li>Quantity: {qty}</li>
     </ul>
    )
}

export default Item;