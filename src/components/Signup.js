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
          .then(response => console.log(response))
        
    }

    return(
       <Form onSubmit={handleSubmit}>
        <Form.Input
          type="username"
          label="username"
          placeholder="Create a funky username Bro!"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          />
          <Form.Input
            type="email" 
            label="email"
            placeholder="none@none.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Form.Input 
            type="password"
            label="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Form.Input 
            type="password"
            label="confirm password"
            placeholder="passwordConfirm"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            required
          />
          <Button type='submit' onSubmit={handleSubmit}>Submit</Button>
       </Form>
    )
}


