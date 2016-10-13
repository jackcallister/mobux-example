import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['TickTock', 'Multiply', 'Square', 'Sum'])

class App extends Component {

  render() {
    return (
      <main>
        <h1>Tick: {this.props.TickTock.tick}</h1>
        <h1>Tock: {this.props.TickTock.tock}</h1>

        <h1>Multiply: {this.props.Multiply.total}</h1>
        <h1>Square: {this.props.Square.tick} : {this.props.Square.tock}</h1>
        <h1>Sum: {this.props.Sum.total}</h1>

        <button onClick={() => { this.props.TickTock.incrementTick() }}>Tick</button>
        <button onClick={() => { this.props.TickTock.incrementTock() }}>Tock</button>

        <h1>Resetting: {this.props.TickTock.resetting}</h1>
        <button onClick={() => { this.props.TickTock.reset() }}>Reset</button>
      </main>
    )
  }
}

export default App
