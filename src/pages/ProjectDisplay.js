import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/projectList';
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
        <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p><b>Skills:</b> {project.skills}</p>
        <GitHub/>
        </div>
  );
}

export default ProjectDisplay;