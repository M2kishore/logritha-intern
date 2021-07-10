import Home from './components/home/HomePage'
import Navbar from "./components/layout/Navbar";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/signinup/SignIn';
import SignUp from './components/signinup/SignUp';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
            <div>
              <Navbar />
              <Route path="/" exact ><Home /></Route>
              <Route path="/login"><SignIn /></Route>
              <Route path="/signup"><SignUp /></Route>
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
