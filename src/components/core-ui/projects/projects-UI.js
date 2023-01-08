import { Grid } from "@mui/material";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { projectsData } from "../../../data/projectsData";
import SingleProject from "../../container/single-project";
import "./projects.css";

function ProjectsUI({ theme, classes }) {
  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>

          <div className="project-container">
            <Grid
              className="project-grid"
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {projectsData.map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsUI;
