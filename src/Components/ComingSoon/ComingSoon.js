import React from 'react';
import './ComingSoon.css';
import workingGif from '../../images/monophy.gif'


const ComingSoon = () => {
    return (
        <div className='cs-container animate__animated animate__zoomIn animate__faster'>
            <div className="cs-content">
                <img src={workingGif} alt="" />
                <h3 >Working on it</h3>
                <h1>Coming Soon</h1>
            </div>
        </div>
    );
};

export default ComingSoon;