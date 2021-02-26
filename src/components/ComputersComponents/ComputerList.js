import React from 'react'
import Computer from './Computer'

const ComputerList = ({ computers }) => (
    <div className="cards">
        { computers.map(computer => <Computer computer={computer}/>)}
    </div>
)

export default ComputerList
