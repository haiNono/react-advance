import React, { Component } from 'react'
import './index.css'

export default class Form extends Component {
  state = {
    formData: {}
  }

  // 重置表单内容
  reset = () => {
    const { formData } = this.state
    for (let key of Object.keys(formData)) {
      formData[key] = ''
    }
    this.setState({ formData })
  }

  // 提交，传入一个函数，用函数处理表单数据
  submit = cb => {
    cb && cb({ ...this.state.formData })
  }

  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  render() {
    const children = React.Children.toArray(this.props.children)
    const renderChildren = []
    React.Children.forEach(children, child => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props
        // 给子标签加上属性
        const Children = React.cloneElement(
          child,
          {
            key: name,
            handleChange: this.setValue,
            value: this.state.formData[name]
          },
          child.props.children
        )
        renderChildren.push(Children)
      }
    })

    return <div className="form">{renderChildren}</div>
  }
}
