import React, { useState, useEffect } from 'react'
import ComputerList from './ComputerList'

export default function ComputerListContainer() {
    const [computers, setComputers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/computers')
            .then(resp => resp.json())
            .then(data => setComputers(data))
    }, [])

    return(
        <ComputerList computers={computers} />          
    )
}