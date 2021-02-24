import React from 'react'

const Computer = (computer) => (
    <div>
        <img className="pc-card-img" src="https://images-na.ssl-images-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg" />
        <h1>{ computer.computer.name }</h1>
        <h2>CPU: { computer.computer.CPU }</h2>
        <h2>GPU: { computer.computer.GPU }</h2>
    </div>
)

export default Computer