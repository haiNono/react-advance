import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import ReactRedux from './React-redux'

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
  info: userReducer
})
// 创建store
const Store = createStore(
  rootReducer,
  { number: 1, info: { name: 'zhangsan' } },
  rootMiddware
)

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    Store.dispatch({ type: 'ADD' })
    Store.dispatch({
      type: 'SET',
      payload: { name: '张三', mes: 'learn React' }
    })
  }, [])
  return (
    <Provider store={Store}>
      <ReactRedux />
    </Provider>
  )
}
