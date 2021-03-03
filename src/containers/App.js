import './App.css';
import Signup from '../components/Signup'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';


function App() {

  return (
    
    <Router>
      <Navbar />
      <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/home" render={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
