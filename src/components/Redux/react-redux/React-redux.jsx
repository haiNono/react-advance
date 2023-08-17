import React from 'react'
import { connect } from 'react-redux'

function ReactRedux(props) {
  const { info, number } = props
  return (
    <div>
      <p>
        {' '}
        {info.name ? `hello, my name is ${info.name}` : 'what is your name'} ,
        {info.mes ? info.mes : ' what do you say? '}{' '}
      </p>
      《React进阶实践指南》 {number} 👍 <br />
    </div>
  )
}
const mapStateToProps = state => ({
  number: state.number,
  info: state.info
})

export default connect(mapStateToProps)(ReactRedux)
