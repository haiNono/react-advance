import React from 'react'

export default function Son({ number }) {
  console.log('子组件渲染了')
  return <div>{number} -- 子</div>
}
