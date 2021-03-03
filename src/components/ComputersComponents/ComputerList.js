import React from 'react'
import Computer from './Computer'

const ComputerList = ({ computers }) => (
    <div className="cards">
        { computers.map(computer => <Computer computer={computer} key={computer.id}/>)}
    </div>
)

export default ComputerList
