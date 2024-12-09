import {
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "../../components/container/navbar";
import questionnaireR from "../../assets/images/surveyeasy/questionnaire-r.png";
import questionnaireP from "../../assets/images/surveyeasy/questionnaire-p.png";
import empathyMapP from "../../assets/images/surveyeasy/empathy-map-p.png";
import userFlowImage from "../../assets/images/ta-management/user-flow.png";
import personaR from "../../assets/images/surveyeasy/persona-r.jpg";
import personaP from "../../assets/images/surveyeasy/persona-p.jpg";
import validateR from "../../assets/images/surveyeasy/validate-r.png";
import validateP from "../../assets/images/surveyeasy/validate-p.png";
import refine1Old from "../../assets/images/surveyeasy/refine-1-old.png";
import refine1New from "../../assets/images/surveyeasy/refine-1-new.png";
import refine2Old from "../../assets/images/surveyeasy/refine-2-old.png";
import refine2New from "../../assets/images/surveyeasy/refine-2-new.png";
import cover from "../../assets/images/ta-management/cover.png";
import wireframe1 from "../../assets/images/ta-management/wireframe1.png";
import wireframe2 from "../../assets/images/ta-management/wireframe2.png";
import colorLight from "../../assets/images/surveyeasy/color-light.png";
import colorDark from "../../assets/images/surveyeasy/color-dark.png";
import roboto from "../../assets/images/surveyeasy/roboto.png";
import database from "../../assets/images/ta-management/database.png";
import mcgill from "../../assets/images/ta-management/mcgill.jpeg";
import dropdown from "../../assets/images/ta-management/dropdown.png";
import navbar from "../../assets/images/ta-management/navbar.png";

function BigHeader({ children, sx }) {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "bold", marginTop: 5, marginBottom: 5 }}
    >
      {children}
    </Typography>
  );
}

function SmallHeader({ children, sx }) {
  return (
    <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 5, ...sx }}>
      {children}
    </Typography>
  );
}

function SurveyEasyPage() {
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Wenjia Liu | TA Management</title>
      </Helmet>
      <Navbar />

      <Container>
        <Paper elevation={10}>
          <Image duration={0} src={cover} fit="contain" />
        </Paper>

        <Typography
          variant="h2"
          align="center"
          sx={{ fontWeight: "bold", marginTop: 5 }}
        >
          TA Management Website
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
              <Typography variant="body1">Web Design</Typography>
              <Typography variant="body1">Web Development</Typography>
              <Typography variant="body1">Backend Development</Typography>
              <Typography variant="body1">Database Design</Typography>
              <Typography variant="body1">API Design</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Background
              </Typography>
              <Typography variant="body1">
                The School of Computer Science at McGill University wants to
                build a TA Management website.
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
                How can we make the website easy to use for all types of users –
                students, TAs, professors, and administrators?
              </Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
                Project Goal
              </Typography>
              <Typography variant="h6">
                Create a functional and useful TA Management website that is
                professional-looking, responsive, dynamic, and interactive. The
                features include giving feedback to TAs as students and
                professors, viewing ratings and feedback as TAs, and assigning
                TAs to courses as administrators.
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>

      <Fade bottom>
        <Container ref={sectionRefs[2]}>
          <IdeateAndPrototypeSection />
        </Container>
      </Fade>

      <Fade bottom>
        <Container ref={sectionRefs[3]}>
          <ArchitectureSection />
        </Container>
      </Fade>

      <Fade bottom>
        <Container ref={sectionRefs[4]}>
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
      <BigHeader>Discover</BigHeader>

      <SmallHeader>Research Methods</SmallHeader>
      <Typography variant="body1">
        In order to better understand the users, I started user research by
        surveys and interviews.
      </Typography>

      <SmallHeader>Target Users</SmallHeader>
      <Typography variant="body1" sx={{ fontWeight: "bold" }} align="center">
        Primary User Group
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#bf9001" }}
        align="center"
      >
        Researchers, Students, People who like to get rewarded while helping the
        others
      </Typography>
      <Typography variant="body1" align="center">
        Currently seeking for survey to post and fill out
      </Typography>

      <SmallHeader>Survey & Interview</SmallHeader>
      <Typography variant="body1">
        I conducted an online survey of 38 potential users to understand their
        desires and challenges they faced when they post surveys and fill out
        surveys. Some sample questions are listed below:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Image duration={0} src={questionnaireR} fit="contain" />
        </Grid>
        <Grid item xs={6}>
          <Image duration={0} src={questionnaireP} fit="contain" />
        </Grid>
      </Grid>
    </>
  );
}

function EmpathizeAndDefineSection() {
  return (
    <>
      <BigHeader>Empathize & Define</BigHeader>

      <SmallHeader sx={{ marginBottom: 5 }}>User Persona</SmallHeader>

      <Grid
        container
        spacing={3}
        sx={{
          border: "1px solid black",
          borderRadius: 6,
          padding: 3,
          marginBottom: 5,
        }}
      >
        <Grid item lg={4}>
          <Image duration={0} src={personaR} fit="contain" />
        </Grid>
        <Grid item lg={8}>
          <Typography gutterBottom variant="body1">
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
          <Typography gutterBottom variant="body1" align="center">
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

      <Grid
        container
        spacing={3}
        sx={{
          border: "1px solid black",
          borderRadius: 6,
          padding: 3,
        }}
      >
        <Grid item xs={12} lg={4}>
          <Image duration={0} src={personaP} fit="contain" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography gutterBottom variant="body1">
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
          <Typography gutterBottom variant="body1" align="center">
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

      <SmallHeader>Empathy Map</SmallHeader>
      <Stack alignItems="center">
        <Image duration={0} src={empathyMapP} fit="contain" width="60%" />
      </Stack>
    </>
  );
}

function IdeateAndPrototypeSection() {
  return (
    <>
      <BigHeader>Ideate & Prototype</BigHeader>

      <SmallHeader>User Flow</SmallHeader>
      <Stack alignItems="center">
        <Image duration={0} src={userFlowImage} fit="contain" width="60%" />
      </Stack>
      <SmallHeader>Wireframe</SmallHeader>

      <Stack direction="row" gap={5}>
        <Image duration={0} src={wireframe1} fit="contain" />
        <Image duration={0} src={wireframe2} fit="contain" />
      </Stack>

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <SmallHeader sx={{ marginTop: 0 }}>Design Style</SmallHeader>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="body1">
            The main color we chose was red and white. Since this is a school
            website, we decided to use the same color of the symbol of McGill
            University. making it feel consistent with the school’s symbol.
          </Typography>
          <Image duration={0} src={mcgill} fit="contain" height="60px" />

          <Typography variant="body1">
            We used simple and easy-to-understand icons. We would like to make
            sure these icons could be fast to recognize at a glance by the user.
          </Typography>
          <br />
        </Grid>
      </Grid>
    </>
  );
}

function ValidateSection() {
  return (
    <>
      <BigHeader>Validate</BigHeader>

      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Stack direction="row" justifyContent="center">
            <Image duration={0} src={validateR} fit="contain" width="20%" />
          </Stack>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            1 student participant who usually need to conduct survey and analyze
            the survey result for his research project (In person)
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Stack direction="row" justifyContent="center">
            <Image duration={0} src={validateP} fit="contain" width="20%" />
            <Image duration={0} src={validateP} fit="contain" width="20%" />
          </Stack>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            2 workers who like to do some paid survey in their free time (Via
            zoom)
          </Typography>
        </Grid>
      </Grid>

      <SmallHeader>Refine</SmallHeader>

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        01
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Design Iteration | Participant Home Page
      </Typography>
      <Typography variant="body1">
        Add a new function — ‘current filters’, which allows the users to
        track/edit the current filters easily.
      </Typography>
      <Grid container>
        <Grid item lg={5.5}>
          <Image duration={0} src={refine1Old} fit="contain" />
        </Grid>
        <Grid
          item
          lg={1}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <AiOutlineArrowRight size={60} />
        </Grid>
        <Grid item lg={5.5}>
          <Image duration={0} src={refine1New} fit="contain" />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        02
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Show all surveys in the table instead of card component
      </Typography>
      <Typography variant="body1">
        → Pain point: hard to organize all survey (A clear-cut organizational
        structure)
      </Typography>

      <Grid container>
        <Grid item lg={5.5}>
          <Image duration={0} src={refine2Old} fit="contain" />
        </Grid>
        <Grid
          item
          lg={1}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <AiOutlineArrowRight size={60} />
        </Grid>
        <Grid item lg={5.5}>
          <Image duration={0} src={refine2New} fit="contain" />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        03
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Make the survey description stick on the pages, instead of scrolling
        down with the survey questions.
      </Typography>
      <Typography variant="body1">
        → Pain point: hard to scroll back to the top of page
      </Typography>
    </>
  );
}

function ArchitectureSection() {
  return (
    <>
      <BigHeader>Architecture</BigHeader>
      <SmallHeader>Database Design (MongoDB w/ Mongoose)</SmallHeader>
      <Image duration={0} src={database} fit="contain" />

      <SmallHeader>API Design (Express.js)</SmallHeader>
      <Typography>
        We built REST APIs. We also API versioning to iteratively improve our
        APIs. Here are a selection of APIs for users:
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Method</TableCell>
              <TableCell>Route</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>GET</TableCell>
              <TableCell>/api/users/v2</TableCell>
              <TableCell>
                Query Users, optionally filter by firstName, lastName, email
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>GET</TableCell>
              <TableCell>/api/users/v2/:id</TableCell>
              <TableCell>Get User by ID</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>POST</TableCell>
              <TableCell>/api/users/v2/register</TableCell>
              <TableCell>Register User</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>POST</TableCell>
              <TableCell>/api/users/v2/login</TableCell>
              <TableCell>Login as User</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>POST</TableCell>
              <TableCell>/api/users/v2/upload</TableCell>
              <TableCell>Save multiple Users</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>DELETE</TableCell>
              <TableCell>/api/users/v2/:id</TableCell>
              <TableCell>Idempotent delete User by ID</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>PUT</TableCell>
              <TableCell>/api/users/v2/:id</TableCell>
              <TableCell>Update User info</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <SmallHeader>Web Architecture (React)</SmallHeader>
      <Typography>
        We used Bootstrap for responsive styling and MUI components. We used
        React Query for data fetching, data mutations, and local caching.
      </Typography>
    </>
  );
}

function FinalDeliverySection() {
  return (
    <>
      <BigHeader>Final Delivery</BigHeader>
      <SmallHeader>Key Features</SmallHeader>

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Easy Navigation
          </Typography>
          <Typography variant="body1">
            Provides users with easy and faster access to content they want.
          </Typography>
          <Typography variant="body1">
            Provide a clear navigation bar that makes it easier to maneuver
            between different pages.
          </Typography>
          <Typography variant="body1">
            Prioritize functionality and navigation for the user.
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Image duration={0} src={navbar} fit="contain" />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Reduce Multiple operations
          </Typography>

          <Typography variant="body1">
            We put a dropdown at the top of each page. In order to 1. Let the
            user change the user types efficiently without doing the action of
            re-login multiple times. 2. And it is also a clear indicator of the
            current user types. Especially for the user that needs to do
            multiple operations between different user types, a user type
            dropdown can prevent the user from getting lost in their current
            user type.
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Image duration={0} src={dropdown} fit="contain" height="200px" />
        </Grid>
      </Grid>
    </>
  );
}
