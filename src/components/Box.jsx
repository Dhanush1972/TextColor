import React from 'react'

const Box = ({ color, hex, darktext }) => {
  return (
    <div>
      <section
        className="box"
        style={{
          backgroundColor: color,
          color: darktext ? "#000" : "#FFF",
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hex ? hex : null}</p>
      </section>
    </div>
  )
}

// Default props
Box.defaultProps = {
  color: "Empty color"
}

export default Box
