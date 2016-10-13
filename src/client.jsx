import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import Database from './Database'
import TickTock from './TickTock'
import Multiply from './Multiply'
import Square from './Square'
import Sum from './Sum'
import App from './App.jsx'

const store = new Database()

const stores = {
  TickTock: new TickTock(store),
  Multiply: new Multiply(store),
  Square: new Square(store),
  Sum: new Sum(store),
}

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
