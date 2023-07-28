import React from 'react'
import Son from '../Son'

export default function Father(props) {
  const sonRef = props.sonRef

  return <Son sonRef={sonRef} />
}
