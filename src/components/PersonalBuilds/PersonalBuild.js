import React from 'react'
import PC from '../../images/PC.jpg'

const PersonalBuild = ({computer}) => (
    <div className="card">
        <img className="card-img-top" src={PC} alt="Test" />
        <button onClick={() => deleteCard(computer)}>Delete</button>
        <div className="card-body">
            <h1 className="card-title">{ computer.name }</h1>
            <hr></hr>
            <h2 className="card-text">CPU: { computer.Cpu.model }</h2>
            <h2 className="card-text">GPU: { computer.Gpu.model }</h2>
        </div>
    </div>
)

function deleteCard(computer) {
    if (window.confirm("Are you sure you want to delete this build?")) {
        fetch(`http://localhost:3000/computers/${computer.id}`, {
            method: 'DELETE',
        })
        .then(window.location.reload(false))
    }
}

export default PersonalBuild