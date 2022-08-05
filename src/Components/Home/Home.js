import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: ['Web Developer', 'React Developer', 'Backend Developer', 'UI Designer'],
            typeSpeed: 30,
            backSpeed: 10,
            loop: true,
            backDelay: 2000,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="home-container">
            <div className="home-content">
                <h2 className="hey-there">Hey there,</h2>
                <h1 className="main-heading-top">I&apos;m </h1>
                <h1 className="main-heading">Ranok Raihan</h1>
                <div className="my-title">
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <p className="heading-content">
                    A self-driven and passionate web developer with a passion for JavaScript.Want to
                    work in the Software industry with modern web technologies and enhance my
                    knowledge and skill with increasing responsibilities.
                </p>
                <a href="https://drive.google.com/uc?export=download&id=1Y-Z6sksS6KF4F1F3T9mhaWh7i12oqJI8">
                    <button type="button" className="btn primary-btn">
                        <FontAwesomeIcon icon={faDownload} /> Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;
