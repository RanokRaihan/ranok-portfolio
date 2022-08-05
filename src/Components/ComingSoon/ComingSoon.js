import React from 'react';
import workingGif from '../../images/monophy.gif';
import './ComingSoon.css';

const ComingSoon = () => (
    <div className="cs-container animate__animated animate__zoomIn animate__faster">
        <div className="cs-content">
            <img src={workingGif} alt="" />
            <h3>Working on it</h3>
            <h1>Coming Soon</h1>
        </div>
    </div>
);

export default ComingSoon;
