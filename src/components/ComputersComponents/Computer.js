import React from 'react'
import PC from '../../images/PC.jpg'

const Computer = ({computer}) => (

    <div className="card">
        <img className="card-img-top" src={PC} alt="Test" />
        <div className="card-body">
            <h1 className="card-title">{ computer.name }</h1>
            <hr></hr>
            <h2 className="card-text">CPU: { computer.Cpu.model }</h2>
            <h2 className="card-text">GPU: { computer.Gpu.model }</h2>
        </div>
    </div>
)


export default Computer