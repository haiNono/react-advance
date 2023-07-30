import React from 'react'

// dynamicLoad是一个异步函数，一般为 （） => import()
export function asyncLoad(dynamicLoad) {
  return class content extends React.Component {
    state = {
      Component: null
    }
    componentDidMount() {
      if (this.state.Component) {
        return
      }
      dynamicLoad()
        .then(module => {
          console.log(module)
          return module.default
        })
        .then(compo => {
          console.log(compo, 'compo')
          this.setState({ Component: compo })
        })
    }
    render() {
      const { Component } = this.state
      console.log(Component, 'Component')
      return Component ? <Component /> : <div>加载中。。。</div>
    }
  }
}
