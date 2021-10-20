import React,{useState} from'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import AboutPage from "../pages/AboutPage";
import ResortListingPage from "../pages/ResortListingPage";
import ResortDescriptionPage from "../pages/ResortDescriptonPage";


import "../assets/css/App.css";
import "../assets/css/utilities.css";


const App = () => {

  const [resorts , setResorts] = useState([{}]);

  return (

          
          <Router>

              <Switch>
                  <Route exact path="/">
                      <HomePage resorts={resorts}  setResorts={setResorts}/>
          
                  </Route>

                  <Route exact path= "/about">

                      <AboutPage/>
                    
                  </Route>


                  <Route  exact path= "/registration">
                      <RegistrationPage/>  
                  </Route>

                  <Route exact path= "/resorts">
                      <ResortListingPage resorts ={resorts}  setResorts={setResorts}/>
                  </Route>

                  <Route exact path= "/login">
                      Blah 
                  </Route>

                  <Route exact path= "/resort/details/:id" >
                      <ResortDescriptionPage/>   
                  </Route>

              </Switch>


          </Router>
            
   
  )
}

export default App


