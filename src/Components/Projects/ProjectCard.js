import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ data }) => (
    <div className="project-card">
        <div className="thumbnail">
            <img src={data.thumbnail} alt="" />
        </div>
        <h1 className="project-title">{data.title}</h1>
        <div className="project-description-container">
            <p className="project-description">{data.description}</p>
        </div>
        <div className="links">
            {data.LiveLink && (
                <a href={data.LiveLink}>
                    <button type="button" className="live-site">
                        Live Site
                    </button>
                </a>
            )}
            {data.clientCodeLink && (
                <a href={data.clientCodeLink}>
                    <button type="button" className="live-site">
                        Client Code
                    </button>
                </a>
            )}
            {data.serverCodeLink && (
                <a href={data.serverCodeLink}>
                    <button type="button" className="live-site">
                        Server Code
                    </button>
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;
