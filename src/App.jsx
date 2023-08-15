/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function App() {
  let num, setnum
  const [number, setnumber] = useState(0)
  ;[num, setnum] = useState(1)
  const [err, seterr] = useState('error')
  return (
    <>
      <h2>
        {number}
        <button onClick={() => setnumber(number + 1)}>点击</button>
      </h2>
      <h2>
        {num}
        <button onClick={() => setnum(num + 1)}>点击</button>
      </h2>
      <h2>
        {err}
        <button onClick={() => seterr('good')}>点击</button>
      </h2>
    </>
  )
}

export default App
