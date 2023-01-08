import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "mui-image";
import React, { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import ProjectPageUI from "../../components/core-ui/project-page/project-page-ui";
import { ThemeContext } from "../../contexts/theme-context";
import { projectsData } from "../../data/projectsData";
import surveyResearcherImage from "../../assets/images/surveyeasy/survey-researcher.png";
import surveyParticipantImage from "../../assets/images/surveyeasy/survey-participant.png";
import empathyMapParticipantImage from "../../assets/images/surveyeasy/empathy-map-participant.png";
import userFlowImage from "../../assets/images/surveyeasy/user-flow.png";

function SurveyEasyPage() {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  return (
    <>
      <Helmet>
        <title>Wenjia Liu | SurveyEasy</title>
      </Helmet>
      <Card elevation={0}>
        <CardMedia
          component="img"
          sx={{ objectFit: "contain" }}
          image="https://picsum.photos/1000/300"
        />
      </Card>
      <Container>
        <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
          SurveyEasy
        </Typography>

        <Fade bottom>
          <Grid
            container
            sx={{
              marginTop: 18, // distance from title
            }}
            spacing={3}
          >
            <Grid item xs={6} lg={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Project
              </Typography>
              <Typography variant="body1">
                Research, Design, & Development: SurveyEasy Website
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Role
              </Typography>
              <Typography variant="body1">User Research</Typography>
              <Typography variant="body1">User Persona</Typography>
              <Typography variant="body1">Empathy Mapping</Typography>
              <Typography variant="body1">User Flow</Typography>
              <Typography variant="body1">Wireframing</Typography>
              <Typography variant="body1">Interaction Design</Typography>
              <Typography variant="body1">Web Design</Typography>
              <Typography variant="body1">Web Development</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Background
              </Typography>
              <Typography variant="body1">
                Surveys are an important method to gather information in the
                research of humanities and social sciences. In this project, I
                focused on how to design and implement a website to make the
                surveying process simple for both researchers and participants.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: 6, // distance from title
            }}
            spacing={3}
          >
            <Grid item xs={6} lg={3}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                The Challenge
              </Typography>
              <Typography variant="body1">
                How can we provide the most convenient survey platform for
                researchers and participants alike?
              </Typography>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Project Goal
              </Typography>
              <Typography variant="body1">
                Design and implement a website that is easy-to-use for both
                researchers and survey participants. Specifically, for
                researchers, the website makes the process of designing and
                publishing surveys, and viewing results and analyses of
                completed surveys accessible. For participants, the website
                makes the process of searching surveys and taking surveys
                effective.
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Process
          </Typography>
          <Grid container>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="always"
                onClick={() =>
                  sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Discover
                </Typography>
              </Link>

              <Typography variant="body1">User Research</Typography>
            </Grid>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="always"
                onClick={() =>
                  sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Empathize & Define
                </Typography>
              </Link>
              <Typography variant="body1">User Persona</Typography>
              <Typography variant="body1">Empathy Map</Typography>
              <Typography variant="body1">Pain Points</Typography>
            </Grid>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="always"
                onClick={() =>
                  sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Ideate & Prototype
                </Typography>
              </Link>
              <Typography variant="body1">User Flow</Typography>
              <Typography variant="body1">Wireframe</Typography>
              <Typography variant="body1">Design Style</Typography>
            </Grid>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="always"
                onClick={() =>
                  sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Validate
                </Typography>
              </Link>
              <Typography variant="body1">Usability Testing</Typography>
            </Grid>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="always"
                onClick={() =>
                  sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Final Delivery
                </Typography>
              </Link>
              <Typography variant="body1">Key Features</Typography>
            </Grid>
          </Grid>
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[0]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Discover
          </Typography>
          <DiscoverSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[1]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Empathize & Define
          </Typography>
          <EmpathizeAndDefineSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[2]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Ideate & Prototype
          </Typography>
          <IdeateAndPrototypeSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[3]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Validate
          </Typography>
          <ValidateSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[4]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Final Delivery
          </Typography>
          <FinalDeliverySection />
        </Container>
      </Fade>
    </>
  );
}

export default SurveyEasyPage;

function DiscoverSection() {
  console.log(surveyResearcherImage);
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Research Methods
      </Typography>
      <Typography variant="body1">
        In order to better understand the users, I started user research by
        surveys and interviews.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Target Users
      </Typography>
      <Typography variant="body1">Primary User Group</Typography>
      <Typography variant="body1">
        Researchers, Students, People who like to get rewarded while helping the
        others currently seeking for survey to post and fill out
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Survey & Interview
      </Typography>
      <Typography variant="body1">
        I conducted an online survey of 38 potential users to understand their
        desires and challenges they faced when they post surveys and fill out
        surveys. Some sample questions are listed below:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image src={surveyResearcherImage} fit="contain" />
        </Grid>
        <Grid item xs={6}>
          <Image src={surveyParticipantImage} fit="contain" />
        </Grid>
      </Grid>
    </>
  );
}

function EmpathizeAndDefineSection() {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        User Persona
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Image src={"https://picsum.photos/1000/300"} fit="contain" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography variant="body1">
            Olivia is a postdoctoral research fellow of psychology at the
            University of Washington, Seattle. In her spare time, she also has a
            part-time job as math tutor for high school students and
            undergraduate students. She lives with 3 friends off campus and
            enjoys hanging out with her friends. She usually conducts tons of
            surveys and analyzes the survey result for the purpose of her
            research papers.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }} align="center">
            Personality Traits
          </Typography>
          <Typography variant="body1" align="center">
            Hard-working, Self-confident, Friendly
          </Typography>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Goal
              </Typography>
              <Typography variant="body1">
                Easy to edit the survey questions at any time
              </Typography>
              <Typography variant="body1">
                Close the survey automatically after receiving the targeted
                number of responses
              </Typography>
              <Typography variant="body1">
                View response with automatic data visualization
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Frustration
              </Typography>
              <Typography variant="body1">
                It’s hard to get enough response from the target audience
              </Typography>
              <Typography variant="body1">
                Some responses are from ineligible participants
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Empathy Map
      </Typography>
      <Image src={empathyMapParticipantImage} fit="contain" />
    </>
  );
}

function IdeateAndPrototypeSection() {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        User Flow
      </Typography>
      <Image src={userFlowImage} fit="contain" />

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Low-Fidelity Wireframe
      </Typography>
      <Image src={userFlowImage} fit="contain" />
    </>
  );
}

function ValidateSection() {
  return <>hi</>;
}

function FinalDeliverySection() {
  return <>hi</>;
}
