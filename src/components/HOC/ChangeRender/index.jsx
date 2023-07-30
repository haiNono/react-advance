import React, { Component } from 'react'

class ChangeRender extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>Angular</li>
        </ul>
      </div>
    )
  }
}

const HOC = WrapperComponent => {
  return class Index extends WrapperComponent {
    render() {
      const element = super.render()
      console.log(element)
      const otherProps = {
        name: 'alien'
      }
      /* 替换 Angular 元素节点 */
      const appendElement = React.createElement(
        'li',
        {},
        `hello ,world , my name  is ${otherProps.name}`
      )
      const newchild = React.Children.map(
        element.props.children.props.children,
        (child, index) => {
          if (index === 2) return appendElement
          return child
        }
      )
      return React.cloneElement(element, element.props, newchild)
    }
  }
}

export default HOC(ChangeRender)
