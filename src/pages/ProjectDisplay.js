import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img className= "mainPic" src={project.image}/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="projDesc"> <b>Description: </b>{project.description}</p>
      <div className="btmImageSpace">
      <img className ="btmImage" src={project?.btmImage}/>
      </div>
    </div>

  );
}

export default ProjectDisplay;
