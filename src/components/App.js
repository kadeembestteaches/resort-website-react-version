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
import ResortContext from '../context/ResortContext';


import "../assets/css/App.css";
import "../assets/css/utilities.css";


const App = () => {

  const [resorts , setResorts] = useState([{}]);

  return (

          

            
          <Router>
            <ResortContext.Provider value ={{resorts,setResorts}}>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
            
                    </Route>

                    <Route exact path= "/about">

                        <AboutPage/>
                        
                    </Route>

                    <Route  exact path= "/registration">
                        <RegistrationPage/>  
                    </Route>

                    <Route exact path= "/resorts">
                        <ResortListingPage/>
                    </Route>

                    <Route exact path= "/login">
                        Blah 
                    </Route>

                    <Route exact path= "/resort/details/:id" >
                        <ResortDescriptionPage/>   
                    </Route>

                </Switch> 

            </ResortContext.Provider>
          </Router>
            
   
  )
}

export default App


