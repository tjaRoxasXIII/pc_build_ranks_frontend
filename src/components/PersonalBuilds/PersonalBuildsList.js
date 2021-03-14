import React from 'react'
import PersonalBuild from './PersonalBuild'

const PersonalBuildsList = ({ computers }) => {
    if (computers.length > 0) {
        return(
        <div className="cards">
            { computers.map(computer => <PersonalBuild computer={computer} key={computer.id}/>)}
        </div>
        )
    }
    else {
        return (
            <div>
                <h2>Looks like you don't have any builds yet!</h2>
            </div>
        )
    }
}

export default PersonalBuildsList