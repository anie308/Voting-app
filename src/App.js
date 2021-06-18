
import './App.css';

import Nav from './components/Nav'
import Contestant from './components/Contestant'
import Statistics from './components/Statistics'
import {Route, BrowserRouter as Router, Switch, Redirect}from 'react-router-dom'

function App() {
  return (
    <Router>
          <div className="App">
     <Nav/>
     <Switch>
     <Route path="/" exact   component={Contestant}/>
     <Route path="/statistics" component={Statistics}/>
     </Switch>
    </div>
    </Router>

    
  );
}

export default App;
