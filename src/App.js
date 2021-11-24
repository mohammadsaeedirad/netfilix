import React,{Fragment} from 'react';
import { AuthProvider } from "./cotext/AuthContext"
import NavBar from './components/layouts/navBar';
import About from './components/layouts/about';
import Home from './components/layouts/home';
import Movie from './components/movies/movie';
import ForgotPassword from './components/authentication/ForgotPassword'
import Signup from './components/authentication/Signup.js';
import Login from './components/authentication/Login.js';
import NetfilixState  from './cotext/netfilix/NetfilixState';

import { BrowserRouter as Router ,Switch , Route} from 'react-router-dom';





const App =() => {
  

  return (
  <NetfilixState>

    <Router>
        <Fragment >        
              <AuthProvider>
               <NavBar />
                <Switch>
                 <div className="mt-2">
                  <Route exact  path="/" component={Home} />
                  <Route exact  path="/login" component={Login} />
                  <Route exact  path="/signup" component={Signup} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route exact  path="/about" component={About} />
                  <Route exact  path="/movie/:id" component={Movie} />
                  </div>
                </Switch>  
              </AuthProvider>
       
       </Fragment>
   </Router>
  </NetfilixState>  
  
  );
}

export default App;
