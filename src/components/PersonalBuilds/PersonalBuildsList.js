import React from 'react'
import PersonalBuild from './PersonalBuild'
import { useSelector } from 'react-redux'


const PersonalBuildsList = ({ computers }) => {
    const userId = useSelector(state => state.userId)
    const results = []

    computers.filter(computer => {
        if (computer.user_id === userId) {
            return results.push(computer)
        }
    })


    if (results.length > 0) {
        return(
        <div className="cards">
            { results.map(computer => <PersonalBuild computer={computer} key={computer.id}/>)}
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