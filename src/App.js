import Home from './components/home/HomePage'
import Navbar from "./components/layout/Navbar";
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/signinup/SignIn';
import SignUp from './components/signinup/SignUp';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path="/" exact ><Home/></Route>
          <Route path="/login" exact ><SignIn/></Route>
          <Route path="/signup" exact ><SignUp/></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
