import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experince from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <>
        <Route exact path ="/" component={Home} />
        <Switch>
          <Route path= "/skills" component={Skills}/>
          <Route path= "/experince" component={Experince}/>
          <Route path= "/education" component={Education}/>
        </Switch>
      </>
    </Router>
    
  );
}

export default App;
