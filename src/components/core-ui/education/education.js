import { Container } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { educationData } from "../../../data/educationData";
import EducationCard from "./education-card";
import "./education.css";
import education from "../../../assets/images/education.png";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="education" id="resume">
        <div className="education-body">
          <div className="education-image">
            <img src={education} alt="" width="100%" />
            {/* <AnimationLottie animationPath={education} /> */}
          </div>
          <div className="education-description">
            <h1 style={{ color: theme.primary }}>Education</h1>
            {educationData.map((edu) => (
              <EducationCard
                key={edu.id}
                id={edu.id}
                location={edu.location}
                institution={edu.institution}
                course={edu.course}
                startYear={edu.startYear}
                endYear={edu.endYear}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Education;
