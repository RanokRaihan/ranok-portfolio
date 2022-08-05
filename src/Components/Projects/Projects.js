import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';
import './Projects.css';

const Projects = () => (
    <div className="project-wrapper">
        <h1>Completed Projects</h1>
        <div className="project-grid">
            {projectData.map((SingleData) => (
                <ProjectCard data={SingleData} key={SingleData.id} />
            ))}
        </div>
    </div>
);

export default Projects;
