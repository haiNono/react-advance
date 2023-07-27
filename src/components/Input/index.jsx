import React from 'react'

export default function Input(props) {
  const { onChange } = props
  let value = props.value || ''
  return (
    <input
      type="text"
      onChange={e => onChange && onChange(e.target.value)}
      value={value}
    />
  )
}
Input.displayName = 'input'
