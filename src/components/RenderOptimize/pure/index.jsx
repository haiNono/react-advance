import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  state = {
    number1: 1,
    obj: {
      number: 2
    }
  }
  changeObjNumber = () => {
    const { obj } = this.state
    obj.number++
    this.setState({ obj })
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>number1 -- {this.state.number1}</h2>
        <h2>number -- {this.state.obj.number}</h2>
        <button onClick={this.changeObjNumber}>点我</button>
      </div>
    )
  }
}
