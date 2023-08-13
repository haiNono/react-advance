import React from 'react'

export default function SyntheticEvent() {
  const handleClick = () => {}
  return (
    <div>
      <button onClick={handleClick}>点我</button>
    </div>
  )
}
