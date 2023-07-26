import React, { useRef } from 'react'
import Form from './conponents/Form'
import FormItem from './conponents/Form/Item'
import Input from './conponents/Input'

function App() {
  const form = useRef()
  const submit = () => {
    form.current.submit(console.log)
  }
  const reset = () => {
    form.current.reset()
  }
  return (
    <>
      <Form ref={form}>
        <FormItem label="name" name="name">
          <Input></Input>
        </FormItem>
        <FormItem label="password" name="password">
          <Input></Input>
        </FormItem>
      </Form>
      <div className="buttons">
        <button onClick={submit}>提交</button>
        <button onClick={reset}>重置</button>
      </div>
    </>
  )
}

export default App
