import React, { useState } from 'react';
import PC from '../images/PC.jpg';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


export default function Login() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const user = {user: {
      username,
      password
    }
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.token) {
            localStorage.setItem("token", data.token)
            const token = localStorage.getItem('token')
            //This code block is called to authorize and decrypt the JWT token
            if (token) {
              fetch('http://localhost:3000/auto_login', {
                          headers: {
                              Authorization: `Bearer ${token}`
                          }
                      })
                      .then(resp => resp.json())
                      .then(data => {
                        dispatch({
                          type: 'SIGN_IN',
                          payload: data
                        })
                      })
            }
          }
          else {
            displayErrors(data)
          }
        })
        .then(
          history.push("/")
        )  
  }

  const displayErrors = (data) => {
    Object.entries(data).forEach(message => {
      alert(message)
    })
  }

  return(
  <div className="box-container">
    <div className="box">
      <img className="side-image" src={PC} alt="Test" />
    </div>

    <div className="box-middle">
      <form onSubmit={handleSubmit}>
        <div className="mb=3 forum-bottom">
          <p className="forum-text">Username:</p>
          <input
            type="username"
            label="username"
            className="form-control"
            name="username"
            placeholder="tjaRoxasXIII"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb=3 forum-bottom">
          <p className="forum-text">Password:</p>
          <input
            type="password"
            label="password"
            className="form-control"
            name="off"
            placeholder="TJAllen101795!"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-outline-success" type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>

    <div className="box">
      <img className="side-image" src={PC} alt="Test" />
    </div>

  </div>
  )
}


