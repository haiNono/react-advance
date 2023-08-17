import React, { useState, useEffect } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'

// redux基本使用
// 操作类型和载荷放在action中
function numberReducer(state = 1, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

function userReducer(state = {}, action) {
  const { payload } = action
  switch (action.type) {
    case 'SET':
      return { ...state, ...payload }
    case 'GET':
      return { ...state }
    default:
      return { ...state }
  }
}

// 注册中间件
function logMiddware() {
  return next => {
    return action => {
      const { type } = action
      console.log('发生一次action', type)
      return next(action)
    }
  }
}

// 生成 store
// 注册中间件
const rootMiddware = applyMiddleware(logMiddware)
// 注册reducer
const rootReducer = combineReducers({
  number: numberReducer,
  user: userReducer
})
// 创建store
const Store = createStore(
  rootReducer,
  { number: 1, user: { name: 'zhangsan' } },
  rootMiddware
)

export default function Basic() {
  const [state, setState] = useState(Store.getState())
  useEffect(() => {
    const unSubscribe = Store.subscribe(() => {
      setState(Store.getState())
    })
    return () => unSubscribe()
  }, [])

  return (
    <div>
      <p>
        {' '}
        {state.user.name
          ? `hello, my name is ${state.user.name}`
          : 'what is your name'}{' '}
        ,{state.user.mes ? state.user.mes : ' what do you say? '}{' '}
      </p>
      《React进阶实践指南》 {state.number} 👍 <br />
      <button
        onClick={() => {
          Store.dispatch({ type: 'ADD' })
        }}
      >
        点赞
      </button>
      <button
        onClick={() => {
          Store.dispatch({
            type: 'SET',
            payload: { name: 'alien', mes: 'let us learn React!' }
          })
        }}
      >
        修改标题
      </button>
    </div>
  )
}
