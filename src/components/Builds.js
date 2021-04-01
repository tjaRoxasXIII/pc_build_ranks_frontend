import React from 'react'
import PersonalBuildsContainer from './PersonalBuilds/PersonalBuildsContainer'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Builds() {
    const userId = useSelector(state => state.userId)
    let history = useHistory()
    const displayForm = () => {
        let btn = document.getElementById("expand")

        let form = document.getElementById("new-pc-form")
        if (form.style.display === "none") {
            form.style.display = "block"
            btn.innerText = "-"
        }
        else {
            form.style.display = "none"
            btn.innerText = "+"
        }
    }

    function handleOnSubmit(e) {
        let newComputer = {
            name: e.target[1].value,
            CPU: parseInt(e.target[2].value),
            GPU: parseInt(e.target[3].value),
            user_id: userId
        }
        debugger
        e.preventDefault()
        fetch('http://localhost:3000/computers', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
         },
            body: JSON.stringify(newComputer)
        })
        .then(
            history.push("/")
        )

    }

    return(
        <>
        <h1 style={{color: 'white'}}>Your Build-List</h1>
        
        <PersonalBuildsContainer />
        <h2>Add A Build <button id={"expand"} onClick={displayForm}>+</button></h2>
        <form id="new-pc-form" onSubmit={handleOnSubmit} style={{display: 'none'}}>
            <label>Image</label>
            <input type="file"></input><br/>
            <label>Name</label>
            <input></input><br/>
            <label>CPU</label>
            <input></input><br/>
            <label>GPU</label>
            <input></input><br/>
            <input type="submit"></input>
        </form>
        </>
    )
}