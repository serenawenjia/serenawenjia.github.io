import React from "react";
import { Helmet } from "react-helmet";
import Landing from "../../components/container/landing";
import Navbar from "../../components/container/navbar";
import Projects from "../../components/container/projects";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Wenjia Liu | Home</title>
      </Helmet>
      <Navbar />
      <Landing />
      <Projects />
    </div>
  );
}

export default HomePage;
