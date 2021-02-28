import React from 'react'
import PC from '../../images/PC.jpg'

const Computer = (computer) => (
    <div className="card">
        <img className="card-img-top" src={PC} alt="Test" />
        <div className="card-body">
            <h1 className="card-title">{ computer.computer.name }</h1>
            <h2 className="card-text">CPU: { computer.computer.CPU }</h2>
            <h2 className="card-text">GPU: { computer.computer.GPU }</h2>
        </div>
    </div>
)

export default Computer