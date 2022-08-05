import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';

function App() {
    return (
        <Router>
            <div className="main-container">
                <div className="side-bar">
                    <Navbar />
                </div>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/blogs">
                            <Blogs />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
