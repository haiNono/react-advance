import React from 'react'

export default function Son(props) {
  const sonRef = props.sonRef
  return <div ref={sonRef}>Son</div>
}
