import React from 'react'
import './index.css'

export default function FormItem(props) {
  const { name, handleChange, label, value, children } = props

  const onChange = value => {
    handleChange(name, value)
  }

  return (
    <div className="form-item">
      <span className="label">{label}</span>
      {React.isValidElement(children) && children.type.displayName === 'input'
        ? React.cloneElement(children, { onChange, value })
        : null}
    </div>
  )
}
FormItem.displayName = 'formItem'
