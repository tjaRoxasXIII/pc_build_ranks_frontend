import './App.css';
import React from 'react';
import { Container, } from "semantic-ui-react";
import Login from '../components/Login'


function App() {
  return (
    <Container style={{ padding: "30px 0" }}>
      <Login />
    </Container>
  );
}

export default App;
