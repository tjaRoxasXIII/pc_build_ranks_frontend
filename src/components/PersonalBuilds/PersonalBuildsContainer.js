import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PersonalBuildsList from './PersonalBuildsList'

export default function ComputerListContainer() {
    const userId = useSelector(state => state.userId)
    const [computers, setComputers] = useState([])
    const results = []

    useEffect(() => {
        fetch('http://localhost:3000/computers')
            .then(resp => resp.json())
            .then(data => {
                data.filter(computer => {
                    if (computer.user_id === userId) {
                        return results.push(computer)
                    }
                })

                setComputers(results)
            })
            
    })

    return(
        <div>
            <PersonalBuildsList computers={computers} />
        </div>
    )
}