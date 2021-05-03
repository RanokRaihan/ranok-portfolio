import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className='main-container'>
        <div className="side-bar">
          <Navbar></Navbar>
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/resume'>
              <Resume></Resume>
            </Route>
            <Route path='/projects'>
              <Projects></Projects>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
