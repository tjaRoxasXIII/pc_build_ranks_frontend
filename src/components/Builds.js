import React from 'react'
import PersonalBuildsContainer from './PersonalBuilds/PersonalBuildsContainer'

export default function Builds() {
    const displayForm = () => {
        let form = document.getElementById("new-pc-form")
        form.style.display = "block"
    }

    return(
        <>
        <h1>Your Build-List</h1>
        
        <PersonalBuildsContainer />
        <h2>Add A Build <button onClick={displayForm}>+</button></h2>
        <form id="new-pc-form" style={{display: 'none'}}>
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