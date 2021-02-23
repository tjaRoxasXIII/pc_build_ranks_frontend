import './App.css';
import React from 'react';
import { Container, } from "semantic-ui-react";
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from './Home';


function App() {
  return (
    <Container >
      <Home />
      {/* <Signup /> */}
      <Login/>
    </Container>
  );
}

export default App;
