import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-content">
                <p className='top-tag'>Looking for a web developer!</p>
                <h1 className='main-heading'>I'm  Ranok Raihan</h1>
                <p className="heading-content">Hello! I am a Web Developer with over 1 year of experience. Building easy to use, user friendly web application is truly a passion of mine</p>
                <a href="https://drive.google.com/uc?export=download&id=17MpZr7kOAGIg0yaXvAJMWbniIkM3Tlvi">
                    <button className="btn primary-btn"> <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Home;