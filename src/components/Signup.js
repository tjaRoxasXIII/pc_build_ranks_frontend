import React, { useState } from 'react';
import PC from '../images/PC.jpg';



export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const user = {user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirm
    }
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          debugger
          console.log(data)
          debugger
          if (data.token) {
            localStorage.setItem("token", data.token)
          }
          else {
            displayErrors(data)
          }
        })   
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
              className="form-control"
              label="username"
              name="username"
              placeholder="Little Penguin"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb=3 forum-bottom">
            <p className="forum-text">Email:</p>
            <input
              type="email"
              className="form-control"
              label="email"
              name="email" 
              placeholder="example@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb=3 forum-bottom">
            <p className="forum-text">Password:</p>
            <input
              type="password"
              className="form-control"
              label="password"
              name="off"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb=3 forum-bottom">
            <p className="forum-text">Confirm Password:</p>
            <input
              type="password"
              className="form-control"
              label="confirm password"
              name="off"
              placeholder="passwordConfirm"
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
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


