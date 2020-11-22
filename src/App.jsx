import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Start from './Components/Start'
import Registration from './Components/Registration'
import Onboarding from './Components/Onboarding'
import UserQuiz from './Components/UserQuiz' 


function App() {
  return (<div className="App">
  <Router>
    <Switch>
      <Route exact path='/'>
        <Start></Start>
      </Route>
      <Route path='/Registration'>
        <Registration> 
          <Link to='/Components/RegistrationForm.jsx'> </Link>
      </Registration>
      </Route>
      <Route path='/Onboarding'>
        <Onboarding></Onboarding>
      </Route>
      <Route path='/UserQuiz'>
        <UserQuiz></UserQuiz>
      </Route>
    </Switch>
  </Router>
  </div>)
      
}

export default App;
