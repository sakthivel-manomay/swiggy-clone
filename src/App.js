import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home>
          </Home>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
