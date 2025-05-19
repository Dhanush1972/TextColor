import React from 'react'
import colorNames from 'colornames'

const Input = ({ color, setColor, hex, setHex, darktext, setDarktext }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <center>
        <input
          type="text"
          autoFocus
          required
          placeholder="Add a color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            setHex(colorNames(e.target.value))
          }}
        />
        
        <button
          type="button"
          onClick={() => setDarktext(prev => !prev)}
        >
          Toggle Text Color
        </button>
        </center>
      </form>
    </div>
  )
}

export default Input
