import './App.css';
import './Forum.css';
import Signup from '../components/Signup'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Builds from '../components/Builds'
import Profile from '../components/Profile'
import SearchResults from '../containers/SearchResults'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';

function App() {

  return (
    
    <Router>
      <Navbar />
      {/* <div className="fullScreen"> */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/home" render={Home} />
            <Route exact path="/builds" render={Builds} />
            <Route exact path="/profile" render={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/results" component={SearchResults} />
          </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
