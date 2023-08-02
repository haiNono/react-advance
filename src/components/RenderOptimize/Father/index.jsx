import React, { Component } from 'react'
import Son from '../Son'

export default class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number1: 1,
      number2: 2
    }
    this.component = <Son number={this.state.number1} />
  }

  // 在父组件中缓存子组件的方式控制子组件渲染
  // 在函数组件中，就是useMemo
  controllSon = () => {
    if (this.component.props.number !== this.state.number1) {
      return React.cloneElement(this.component, { number: this.state.number1 })
    }
    return this.component
  }

  render() {
    return (
      <div>
        <h2>{this.state.number1} -- number1</h2>
        <h2>{this.state.number2} -- number2</h2>
        {this.controllSon()}
        <button
          onClick={() => this.setState({ number1: this.state.number1 + 1 })}
        >
          number1 + 1
        </button>
        <button
          onClick={() => this.setState({ number2: this.state.number2 + 1 })}
        >
          number2 + 1
        </button>
      </div>
    )
  }
}
