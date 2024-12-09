import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/container/navbar";
import About from "../../components/core-ui/about/about";
import Education from "../../components/core-ui/education/education";
import Skills from "../../components/core-ui/skills/skills";

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>Wenjia Liu | About</title>
      </Helmet>
      <Navbar />
      <About />
      <Skills />
      <Education />
    </div>
  );
}

export default AboutPage;
