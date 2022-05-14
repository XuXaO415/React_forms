import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList from "./ShoppingList";
import NewItemForm from "./NewItemForm";

it("renders w/o crashing", function() {
    render(<ShoppingList />);
});

it("matches snapshot", function() {
    const {asFragment } = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function() {
    const{queryByText, getByLabelText} = render(<ShoppingList />);
    const input = getByLabelText("Product");
    const {getByText} = render(<NewItemForm />)
    const btn = queryByText("Add Item");
    expect(queryByText('Product Name: Chocolate Milk')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'Chocolate Milk'}})
    fireEvent.click(btn);
    expect(queryByText('Product Name: Chocolate Milk')).toBeInTheDocument();
    
});

