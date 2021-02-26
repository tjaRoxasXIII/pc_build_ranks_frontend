import React from 'react'

const Computer = (computer) => (
    <div className="card">
        <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg" />
        <div className="card-body">
            <h1 className="card-title">{ computer.computer.name }</h1>
            <h2 className="card-text">CPU: { computer.computer.CPU }</h2>
            <h2 className="card-text">GPU: { computer.computer.GPU }</h2>
        </div>
    </div>
)

export default Computer