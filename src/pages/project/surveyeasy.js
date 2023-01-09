import {
  Container,
  CssBaseline,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Navbar from "../../components/container/navbar";
import questionnaireR from "../../assets/images/surveyeasy/questionnaire-r.png";
import questionnaireP from "../../assets/images/surveyeasy/questionnaire-p.png";
import empathyMapP from "../../assets/images/surveyeasy/empathy-map-p.png";
import userFlowImage from "../../assets/images/surveyeasy/user-flow.png";
import personaR from "../../assets/images/surveyeasy/persona-r.jpg";
import personaP from "../../assets/images/surveyeasy/persona-p.jpg";
import validateR from "../../assets/images/surveyeasy/validate-r.png";
import validateP from "../../assets/images/surveyeasy/validate-p.png";
import refine1Old from "../../assets/images/surveyeasy/refine-1-old.png";
import refine1New from "../../assets/images/surveyeasy/refine-1-new.png";
import refine2Old from "../../assets/images/surveyeasy/refine-2-old.png";
import refine2New from "../../assets/images/surveyeasy/refine-2-new.png";
import cover from "../../assets/images/surveyeasy/cover.png";
import leftDownArrow from "../../assets/images/left-down.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

function SurveyEasyPage() {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Wenjia Liu | SurveyEasy</title>
      </Helmet>
      <Navbar />

      <Container>
        <Image src={cover} fit="contain" duration={0} />

        <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
          SurveyEasy
        </Typography>

        <Fade bottom>
          <Grid
            container
            sx={{
              marginTop: 6, // distance from title
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
              marginTop: 6,
            }}
            spacing={3}
          >
            <Grid item xs={6} lg={5}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
                The Challenge
              </Typography>
              <Typography variant="h6">
                How can we provide the most convenient survey platform for
                researchers and participants alike?
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
                Project Goal
              </Typography>
              <Typography variant="h6">
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
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
                  sectionRefs[1].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
                  sectionRefs[2].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
                  sectionRefs[3].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
                  sectionRefs[4].current.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
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
          <DiscoverSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[1]}>
          <EmpathizeAndDefineSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[2]}>
          <IdeateAndPrototypeSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[3]}>
          <ValidateSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container sx={{ marginTop: 5 }} ref={sectionRefs[4]}>
          <FinalDeliverySection />
        </Container>
      </Fade>
    </>
  );
}

export default SurveyEasyPage;

function DiscoverSection() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
        Discover
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Research Methods
      </Typography>
      <Typography variant="body1">
        In order to better understand the users, I started user research by
        surveys and interviews.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Target Users
      </Typography>
      <Typography variant="body1">Primary User Group</Typography>
      <Typography variant="body1">
        Researchers, Students, People who like to get rewarded while helping the
        others currently seeking for survey to post and fill out
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Survey & Interview
      </Typography>
      <Typography variant="body1">
        I conducted an online survey of 38 potential users to understand their
        desires and challenges they faced when they post surveys and fill out
        surveys. Some sample questions are listed below:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image src={questionnaireR} fit="contain" />
        </Grid>
        <Grid item xs={6}>
          <Image src={questionnaireP} fit="contain" />
        </Grid>
      </Grid>
    </>
  );
}

function EmpathizeAndDefineSection() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
        Empathize & Define
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        User Persona
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Image src={personaR} fit="contain" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            border: "1px solid black",
            borderRadius: 6,
            padding: 3,
          }}
        >
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

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Image src={personaP} fit="contain" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography variant="body1">
            Tristan is a 34-year-old middle-class man working in the manufacture
            industry. He lives with his wife in Louisville, Kentucky. He works a
            9 to 5 job and usually spends the night with family and friends. He
            likes to take surveys in sports and health when he is free because
            those areas appeal to him and he feels that he is contributing to
            research projects in his way. Of course, he wouldn't mind the gift
            cards from some surveys as a reward.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }} align="center">
            Personality Traits
          </Typography>
          <Typography variant="body1" align="center">
            Altruistic, Energetic, Curious
          </Typography>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Goal
              </Typography>
              <Typography variant="body1">
                Filter surveys by category and keywords to find the interesting
                ones.
              </Typography>
              <Typography variant="body1">
                Be able to easily save the progress, view drafts and continue
                later.
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Frustration
              </Typography>
              <Typography variant="body1">
                It's difficult to search and find surveys that are interesting.
              </Typography>
              <Typography variant="body1">
                It's hard to remember where a survey was and continue after a
                day or two
              </Typography>
              <Typography variant="body1">
                Some websites don't allow going back to previous questions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Empathy Map
      </Typography>
      <Image src={empathyMapP} fit="contain" />
    </>
  );
}

function IdeateAndPrototypeSection() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
        Ideate & Prototype
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        User Flow
      </Typography>
      <Image src={userFlowImage} fit="contain" />

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Low-Fidelity Wireframe
      </Typography>
      <Image src={userFlowImage} fit="contain" />
    </>
  );
}

function ValidateSection() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
        Validate
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Validate
      </Typography>

      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Stack direction="row">
            <Image src={validateR} fit="contain" width="20%" />
          </Stack>
          <Typography variant="body1">
            1 student participant who usually need to conduct survey and analyze
            the survey result for his research project (In person)
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Stack direction="row">
            <Image src={validateP} fit="contain" width="20%" />
            <Image src={validateP} fit="contain" width="20%" />
          </Stack>
          <Typography variant="body1">
            2 workers who like to do some paid survey in their free time (Via
            zoom)
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Refine
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        1. Design Iteration | Participant Home Page
      </Typography>
      <Typography variant="body1">
        Add a new function — ‘current filters’, which allows the users to
        track/edit the current filters easily.
      </Typography>
      <Grid container>
        <Grid item lg={5.5}>
          <Image src={refine1New} fit="contain" />
        </Grid>
        <Grid
          item
          lg={1}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <AiOutlineArrowLeft size={60} />
        </Grid>
        <Grid item lg={5.5}>
          <Image src={refine1Old} fit="contain" />
        </Grid>
      </Grid>

      <Typography variant="h6">
        2: show all surveys in the table instead of card component
      </Typography>
      <Typography variant="body1">
        → Pain point: hard to organize all survey (A clear-cut organizational
        structure)
      </Typography>

      <Grid container>
        <Grid item lg={5.5}>
          <Image src={refine2New} fit="contain" />
        </Grid>
        <Grid
          item
          lg={1}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <AiOutlineArrowLeft size={60} />
        </Grid>
        <Grid item lg={5.5}>
          <Image src={refine2Old} fit="contain" />
        </Grid>
      </Grid>
    </>
  );
}

function FinalDeliverySection() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 5 }}>
        Final Delivery
      </Typography>
    </>
  );
}
