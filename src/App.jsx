import React, { useRef, useEffect } from 'react'
import Father from './components/ref/Father'

function App() {
  const ref = useRef()
  useEffect(() => {
    console.log(ref, 'current')
  }, [])
  return <Father onRef={ref} />
}

export default App
