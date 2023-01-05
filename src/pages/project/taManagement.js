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
import React, { useContext, useRef, useState } from "react";
import { Fade } from "react-reveal";
import ProjectPageUI from "../../components/core-ui/project-page/project-page-ui";
import { ThemeContext } from "../../contexts/theme-context";
import { projectsData } from "../../data/projectsData";

function TAManagementPage() {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  return (
    <>
      <Card elevation={0}>
        <CardMedia
          component="img"
          sx={{ objectFit: "contain" }}
          image="https://picsum.photos/1000/300"
        />
      </Card>
      <Container>
        <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
          TA Management
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
                Goal
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
          <Typography variant="body1">
            I conducted a survey with X researchers and Y survey participants to
            understand their pain points when posting and taking surveys. Some
            sample questions are listed below:
          </Typography>
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[1]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Empathize & Define
          </Typography>
          <Typography variant="body1">
            Olivia is a postdoctoral research fellow of psychology at the
            University of Washington, Seattle. In her spare time, she also has a
            part-time job as math tutor for high school students and
            undergraduate students. She lives with 3 friends off campus and
            enjoys hanging out with her friends. She conducts and analyzes tons
            of surveys for her research paper Goal: Easy to edit the survey
            questions at any time Close the survey automatically after receiving
            the targeted number of responses View response with automatic data
            visualization Frustration: It’s hard to get enough response from the
            target audience Some responses are from ineligible participants
          </Typography>
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[2]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Ideate & Prototype
          </Typography>
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[3]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Validate
          </Typography>
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[4]}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
            Final Delivery
          </Typography>
        </Container>
      </Fade>
    </>
  );
}

export default TAManagementPage;
