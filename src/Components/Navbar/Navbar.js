import { faBook, faEnvelope, faFile, faHome, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import dp from '../../images/display-picture.jpg';
import './Navbar.css';

const Navbar = () => (
    <div className="navbar-container">
        <div className="dp-container">
            <h2 className="dp-title">Ranok Raihan</h2>
            <img src={dp} alt="" />
        </div>

        <div className="main-nav">
            <ul>
                <li className="nav-item">
                    <NavLink activeClassName="nav-active" exact to="/">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span className="nav-text">Home</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="nav-active" to="/resume">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faFile} />
                        </span>
                        <span className="nav-text">Resume</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="nav-active" to="/projects">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faTasks} />
                        </span>
                        <span className="nav-text">Projects</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="nav-active" to="/blogs">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="nav-text">Blogs</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="nav-active" to="contact">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span className="nav-text">Contact Me</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="nav-footer">
            <div className="social-link" />
            <div className="copyright" />
        </div>
    </div>
);

export default Navbar;
