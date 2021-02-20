import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";

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
        headers: { 'Content-Type': 'application/json'},
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
      <Form onSubmit={handleSubmit}>
      <Form.Input
        type="username"
        label="username"
        name="username"
        placeholder="Create a funky username Bro!"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        />
        <Form.Input
          type="email"
          label="email"
          name="email" 
          placeholder="example@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Form.Input 
          type="password"
          label="password"
          name="off"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Form.Input 
          type="password"
          label="confirm password"
          name="off"
          placeholder="passwordConfirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          required
        />
        <Button type='submit' onSubmit={handleSubmit}>Submit</Button>
      </Form>
  )
}


