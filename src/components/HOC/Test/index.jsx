import React, { Component } from 'react'

function HOC(WrapComponent) {
  class Index extends WrapComponent {
    componentDidMount() {
      console.log(this.props, 'props')
    }
    render() {
      if (this.props.visible) {
        return super.render()
      } else {
        return <div>暂无数据</div>
      }
    }
  }
  return Index
}

class Test extends Component {
  visible = true
  render() {
    return <div>Test</div>
  }
}

export default HOC(Test)
