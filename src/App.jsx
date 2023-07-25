import React from 'react'

class App extends React.Component {
  state = { number: 0 }
  // 项目中使用的是react18版本，采用的是concurrent模式而不是legacy模式
  // 因此，setState都是异步的！！！！！！！！！
  handleClick = () => {
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback1', this.state.number)
    })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback2', this.state.number)
    })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback3', this.state.number)
    })
    console.log(this.state.number)
  }

  handleDelayClick = () => {
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback1', this.state.number)
    })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback2', this.state.number)
    })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback3', this.state.number)
    })
    console.log(this.state.number)
  }

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button onClick={this.handleClick}>点我啊笨蛋</button>
        <button onClick={this.handleDelayClick}>我能延时哦</button>
      </div>
    )
  }
}

export default App
