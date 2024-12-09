import React from "react";
import { Helmet } from "react-helmet";
import Landing from "../../components/container/landing";
import Navbar from "../../components/container/navbar";
import Projects from "../../components/container/projects";
import Education from "../../components/core-ui/education/education";
import Skills from "../../components/core-ui/skills/skills";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Wenjia Liu | Home</title>
      </Helmet>
      <Navbar />
      <Landing />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default HomePage;
