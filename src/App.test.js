import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test('Render the App component successfully', () => {
    render(<App />)
    const button = screen.getByRole('button', {
        name: /increment/i
      })
    expect(button).toBeInTheDocument();
    // screen.debug(button)
})
test('Render Three buttons', async() => {
    render(<App />)
    const buttons = await screen.findAllByRole('button');
    expect(buttons).toHaveLength(3);
    // screen.debug(items)
})
test('Intial count value to be 0', () => {
    render(<App />)
    const intialCount = screen.getByTestId('count-label')

    expect(intialCount).toHaveTextContent('0')
    // screen.debug(intialCount)
})
test('Count value should increase by 1 onclick of increment button', () => {
    render(<App />)
    const intialCount = screen.getByTestId('count-label')
   const button = screen.getByRole('button', {
        name: /increment/i
      })
    fireEvent.click(button)
    expect(intialCount).toHaveTextContent('1')
    // screen.debug(intialCount)
})
test('Count value should decrease by 1 onclick of decrement button', () => {
    render(<App />)
    const intialCount = screen.getByTestId('count-label')
    const button = screen.getByRole('button', {
        name: /Decrement/i
      })
    fireEvent.click(button)
    expect(intialCount).toHaveTextContent('0')
    expect(button).toHaveAttribute('disabled')
    screen.debug(intialCount)
    // screen.debug(button)
})
test('Count value should reset onclick of reset button and button should disable', () => {
    render(<App />)
    const intialCount = screen.getByTestId('count-label')
    const button = screen.getByRole('button', {
        name: /reset/i
      })
    fireEvent.click(button)
    expect(intialCount).toHaveTextContent('0')
    expect(button).toHaveAttribute('disabled')
    // screen.debug(intialCount)
    screen.debug(button)
})




