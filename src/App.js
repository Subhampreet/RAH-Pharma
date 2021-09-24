import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HospitalComponent from './components/Hospital/HospitalComponent';
import EmergencyComponent from './components/Emergency/EmergencyComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <HomeComponent/>
          </Route>
          <Route exact path = "/hospital">
            <HospitalComponent/>
          </Route>
          <Route exact path = "/emergency">
            <EmergencyComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
