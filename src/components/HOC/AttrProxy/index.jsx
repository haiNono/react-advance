import React from 'react'

const HOC = Component => {
  return class Index extends React.Component {
    state = {
      hello: ' <AttrProxy hello={hello}/>'
    }
    render() {
      return <AttrProxy {...this.state} {...this.props} />
    }
  }
}

function AttrProxy(props) {
  console.log(props, 'props')
  return <div>AttrProxy</div>
}

export default HOC(AttrProxy)
