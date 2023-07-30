import React from 'react'

export default function Son(props) {
  const sonRef = props.sonRef
  return <div ref={sonRef}>Son</div>
}
process.env.TEST = 'test'
console.log(process.env, 'son')
