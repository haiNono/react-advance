/* eslint-disable no-unused-vars */
import React from 'react'
import { asyncLoad } from './components/HOC/DynamicLoad/asyncLoad'
const Component = asyncLoad(() => import('./components/HOC/DynamicLoad'))
console.log(Component, 'class')

function App() {
  return <Component />
}

export default App
