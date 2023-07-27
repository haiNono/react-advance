import React, { Component } from 'react'
import Item from '../Item'
import { debounce } from 'lodash'
import './index.css'

export default class ScrollView extends Component {
  handleScroll = e => {
    this.handleScrollToBottom(e)
  }

  handleScrollToBottom() {
    const { scrollHeight, scrollTop, clientHeight } = this.node
    if (scrollTop + clientHeight === scrollHeight) {
      // 使用clientHeight会比较保险，offsetHeight可能会导致到底了也不触发判断
      this.setState({ list: this.state.list + 10 })
      console.log('到底了')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      list: 0
    }
    this.handleScrollToBottom = debounce(
      this.handleScrollToBottom.bind(this),
      200
    )
  }

  node = null

  componentDidMount() {
    this.setState({ list: this.state.list + 10 })
    this.node.addEventListener('scroll', this.handleScroll)
  }
  getSnapshotBeforeUpdate() {
    return this.node.scrollHeight
  }

  componentDidUpdate(_, a, snapshot) {
    console.log(snapshot, 'snapshot')
  }

  render() {
    return (
      <div className="container" ref={node => (this.node = node)}>
        {Array(this.state.list)
          .fill(1)
          .map((item, index) => (
            <Item key={index} text={index} />
          ))}
      </div>
    )
  }
}
