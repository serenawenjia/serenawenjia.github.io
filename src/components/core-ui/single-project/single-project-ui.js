import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./single-project.css";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router-dom";

function SingleProjectUI({
  id,
  name,
  desc,
  tags,
  demo,
  image,
  theme,
  classes,
}) {
  const linkProps = demo.startsWith("http") && {
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <Fade bottom>
      <a href={demo} {...linkProps}>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: theme.quaternary }}
        >
          <div className="projectContent">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{ color: theme.tertiary }}
            >
              {name}
            </h2>
            <img
              src={image ? image : placeholder}
              alt={name}
              style={{
                height: "240px",
                width: "auto",
              }}
            />
          </div>
          <p
            className="project--desc"
            style={{
              background: theme.secondary,
              color: theme.tertiary,
            }}
          >
            {desc}
          </p>
          <div
            className="project--tags"
            style={{
              background: theme.secondary,
              color: theme.tertiary,
            }}
          >
            {tags.map((tag, id) => (
              <span key={id}>{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </Fade>
  );
}

export default SingleProjectUI;
