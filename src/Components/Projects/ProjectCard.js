import React from 'react';
import './Projects.css';
import projectData from './ProjectData'

const ProjectCard = () => {
    return (
        <div>
            <img src={projectData[0].thumbnail} alt="" />
        </div>
    );
};

export default ProjectCard;