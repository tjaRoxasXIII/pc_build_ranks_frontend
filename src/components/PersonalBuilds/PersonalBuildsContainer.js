import React, { useState, useEffect } from 'react'
import PersonalBuildsList from './PersonalBuildsList'

export default function ComputerListContainer() {
    const [computers, setComputers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/computers')
            .then(resp => resp.json())
            .then(data => {
                setComputers(data)
            })
    }, [])

    return(
        <div>
            <PersonalBuildsList computers={computers}/>
        </div>
    )
}