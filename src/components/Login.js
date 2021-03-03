import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import styled from 'styled-components';


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      <Form onSubmit={handleSubmit}>
        <Form.Input
          type="username"
          label="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
       
        <Form.Input 
          type="password"
          label="password"
          name="off"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type='submit' onSubmit={handleSubmit}>Submit</Button>
      </Form>
  )
}


