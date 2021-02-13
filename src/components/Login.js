import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users")
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


