import './App.css';
import React from 'react';
import { Container, } from "semantic-ui-react";
import Signup from '../components/Signup'


function App() {
  return (
    <Container style={{ padding: "30px 0" }}>
      <Signup />
    </Container>
  );
}

export default App;
