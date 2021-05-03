import React from 'react';
import dp from '../../images/display-picture.jpg';
import './Navbar.css';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faFile, faHome, faTasks } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="dp-container">
                <h2 className="dp-title">Ranok Raihan</h2>
                <img src={dp} alt="" />
            </div>
            <div className="main-nav">
                <ul>
                    <li className='nav-item'>
                        <Link to='/'>
                            <span className='nav-icon'>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume'>
                            <span className='nav-icon'>
                                <FontAwesomeIcon icon={faFile} />
                            </span>
                            <span className="nav-text">Resume</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects'>
                            <span className='nav-icon'>
                                <FontAwesomeIcon icon={faTasks} />
                            </span>
                            <span className="nav-text">Projects</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs'>
                            <span className='nav-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            <span className="nav-text">Blogs</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact'>
                            <span className='nav-icon'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="nav-text">Contact Me</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav-footer">
                <div className="social-link">

                </div>
                <div className="copyright">

                </div>
            </div>
        </div>
    );
};

export default Navbar;