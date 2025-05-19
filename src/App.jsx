import React, { useState } from 'react'
import Box from './components/box'
import Input from './components/Input'

const App = () => {

  let [color,setColor]=useState('')
  let [hex,setHex]=useState('')
  let [darktext,setDarktext]=useState(true)
  return (
    <div>
      <Box color={color} hex={hex} darktext={darktext}/>
      <Input color={color} setColor={setColor} hex={hex} setHex={setHex} darktext={darktext} setDarktext={setDarktext}/>
    </div>
  )
}

export default App