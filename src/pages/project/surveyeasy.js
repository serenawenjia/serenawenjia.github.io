import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
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
import refine3Old from "../../assets/images/surveyeasy/refine-3-old.png";
import refine3New from "../../assets/images/surveyeasy/refine-3-new.png";
import cover from "../../assets/images/surveyeasy/cover.png";
import wireframe from "../../assets/images/surveyeasy/lo-fi-wireframe.png";
import leftDownArrow from "../../assets/images/left-down.png";
import { BigHeader, SmallHeader } from "./components";
import deliveryResearcherFilter from "../../assets/images/surveyeasy/delivery-researcher-filter.gif";
import deliveryPreview from "../../assets/images/surveyeasy/delivery-preview.gif";
import deliverySurveys from "../../assets/images/surveyeasy/delivery-surveys.gif";
import deliveryParticipantFilter from "../../assets/images/surveyeasy/delivery-participant-filter.gif";
import deliveryTake from "../../assets/images/surveyeasy/delivery-take.gif";
import deliveryResult from "../../assets/images/surveyeasy/delivery-result.gif";

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
        <Image duration={0} src={cover} fit="contain" />

        <Typography
          gutterBottom
          variant="h2"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          SurveyEasy
        </Typography>

        <Link
          href="https://surveyeasy-psql-mui-5016.fly.dev/"
          color="inherit"
          underline="always"
        >
          <Typography align="center" variant="h5" sx={{ fontWeight: "bold" }}>
            Live Website
          </Typography>
        </Link>

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
        <Container sx={{ maxWidth: "90%" }} maxWidth={false}>
          <BigHeader>Process</BigHeader>
          <Grid container>
            <Grid item xs={6} lg={12 / 5}>
              <Link
                component="button"
                color="inherit"
                underline="hover"
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
                underline="hover"
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
                underline="hover"
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
                underline="hover"
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
                underline="hover"
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

      <Container ref={sectionRefs[0]}>
        <DiscoverSection />
      </Container>

      <Container ref={sectionRefs[1]}>
        <EmpathizeAndDefineSection />
      </Container>

      <Container ref={sectionRefs[2]}>
        <IdeateAndPrototypeSection />
      </Container>

      <Container ref={sectionRefs[3]}>
        <ValidateSection />
      </Container>

      <Container ref={sectionRefs[4]}>
        <FinalDeliverySection />
      </Container>
    </>
  );
}

export default SurveyEasyPage;

function DiscoverSection() {
  return (
    <>
      <Fade bottom>
        <BigHeader>Discover</BigHeader>

        <SmallHeader>Research Methods</SmallHeader>
        <Typography variant="body1">
          In order to better understand the users, I started user research by
          surveys and interviews.
        </Typography>

        <SmallHeader>Target Users</SmallHeader>
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: 6,
            padding: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            align="center"
          >
            Primary User Group
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#bf9001" }}
            align="center"
          >
            Researchers, Students, People who like to get rewarded while helping
            the others
          </Typography>
          <Typography variant="body1" align="center">
            Currently seeking for survey to post and fill out
          </Typography>
        </Box>
      </Fade>

      <Fade bottom>
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
      </Fade>
    </>
  );
}

function EmpathizeAndDefineSection() {
  return (
    <>
      <Fade bottom>
        <BigHeader>Empathize & Define</BigHeader>

        <SmallHeader sx={{ marginBottom: 5 }}>User Persona</SmallHeader>

        <Grid
          container
          spacing={3}
          sx={{
            border: "1px solid black",
            borderRadius: 6,
            padding: 3,
            marginBottom: 15,
          }}
        >
          <Grid item lg={4}>
            <Image duration={0} src={personaR} fit="contain" />
          </Grid>
          <Grid item lg={8}>
            <Typography variant="body1" sx={{ marginBottom: 5 }}>
              Olivia is a postdoctoral research fellow of psychology at the
              University of Washington, Seattle. In her spare time, she also has
              a part-time job as math tutor for high school students and
              undergraduate students. She lives with 3 friends off campus and
              enjoys hanging out with her friends. She usually conducts tons of
              surveys and analyzes the survey result for the purpose of her
              research papers.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }} align="center">
              Personality Traits
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ marginBottom: 10 }}
            >
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
      </Fade>
      <Fade bottom>
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
            <Typography variant="body1" sx={{ marginBottom: 5 }}>
              Tristan is a 34-year-old middle-class man working in the
              manufacture industry. He lives with his wife in Louisville,
              Kentucky. He works a 9 to 5 job and usually spends the night with
              family and friends. He likes to take surveys in sports and health
              when he is free because those areas appeal to him and he feels
              that he is contributing to research projects in his way. Of
              course, he wouldn't mind the gift cards from some surveys as a
              reward.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }} align="center">
              Personality Traits
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ marginBottom: 10 }}
            >
              Altruistic, Energetic, Curious
            </Typography>

            <Grid container spacing={3}>
              <Grid item lg={6}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Goal
                </Typography>
                <Typography variant="body1">
                  Filter surveys by category and keywords to find the
                  interesting ones.
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
                  It's difficult to search and find surveys that are
                  interesting.
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
      </Fade>

      <Fade bottom>
        <SmallHeader>Empathy Map</SmallHeader>
        <Stack alignItems="center">
          <Image duration={0} src={empathyMapP} fit="contain" width="60%" />
        </Stack>
      </Fade>

      <Fade bottom>
        <SmallHeader>Pain Points & Solutions</SmallHeader>

        <SmallHeader>Researcher Mode</SmallHeader>

        <TableContainer>
          <Table>
            <TableHead sx={{ th: { fontSize: "1rem", fontWeight: "bold" } }}>
              <TableRow>
                <TableCell>Pain Points</TableCell>
                <TableCell>Solutions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ td: { fontSize: "1rem" } }}>
              <TableRow>
                <TableCell>
                  Some responses are from ineligible participants
                </TableCell>
                <TableCell>
                  Allow setting requirement for participants
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  It’s hard to get enough response from the target audience
                </TableCell>
                <TableCell>
                  Push notifications to eligible participants and allow setting
                  rewards as an incentive
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Analysis and visualization of results require coding
                </TableCell>
                <TableCell>
                  Automatic data visualization when viewing responses
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cannot find past surveys easily</TableCell>
                <TableCell>
                  Dedicated page with sortable table of past surveys
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SmallHeader>Participant Mode</SmallHeader>

        <TableContainer>
          <Table>
            <TableHead sx={{ th: { fontSize: "1rem", fontWeight: "bold" } }}>
              <TableRow>
                <TableCell>Pain Points</TableCell>
                <TableCell>Solutions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ td: { fontSize: "1rem" } }}>
              <TableRow>
                <TableCell>Difficulty finding interesting surveys</TableCell>
                <TableCell>
                  Filter by category, duration, etc. and search by keywords
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Difficulty saving the progress and finding it to continue
                  later
                </TableCell>
                <TableCell>
                  Allow saving drafts and dedicated page for all drafts
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Fade>
    </>
  );
}

function IdeateAndPrototypeSection() {
  return (
    <>
      <Fade bottom>
        <BigHeader>Ideate & Prototype</BigHeader>

        <SmallHeader>User Flow</SmallHeader>
        <Stack alignItems="center">
          <Image duration={0} src={userFlowImage} fit="contain" width="60%" />
        </Stack>
      </Fade>

      <Fade bottom>
        <SmallHeader>Low-Fidelity Wireframe</SmallHeader>
        <Image duration={0} src={wireframe} fit="contain" />
      </Fade>
    </>
  );
}

function ValidateSection() {
  return (
    <>
      <Fade bottom>
        <BigHeader>Validate</BigHeader>

        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Stack direction="row" justifyContent="center">
              <Image duration={0} src={validateR} fit="contain" width="20%" />
            </Stack>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              1 student participant who usually need to conduct survey and
              analyze the survey result for his research project (in person)
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

        <SmallHeader>Objectives</SmallHeader>
        <Typography variant="h6">
          1. Do the interactions make sense to the users?
        </Typography>
        <Typography variant="h6">
          2. Are there any crucial processes or features that we overlooked?
        </Typography>

        <SmallHeader>Tasks</SmallHeader>
        <Typography variant="h6">
          1. You want to find a survey to fill out based on your preference.
          What steps would you take to accomplish this?
        </Typography>
        <Typography variant="h6">
          2. You want to create a survey and get responses from the participants
          who satisfy their requirements. What steps would you take to
          accomplish this?
        </Typography>
      </Fade>
      <Fade bottom>
        <SmallHeader>Key Takeaways</SmallHeader>
        <Grid container spacing={3}>
          <Grid
            item
            lg={4}
            display="flex"
            direction="column"
            alignItems="center"
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 5 }}>
              100%
            </Typography>
            <Typography variant="h6" align="center">
              participants liked the step-by-step instructions and the exam-like
              layout
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            display="flex"
            direction="column"
            alignItems="center"
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 5 }}>
              50%
            </Typography>
            <Typography variant="h6" align="center">
              participants had confusion about the currently applied filter
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            display="flex"
            direction="column"
            alignItems="center"
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 5 }}>
              100%
            </Typography>
            <Typography variant="h6" align="center">
              researchers would like to preview the survey while editing as
              participants would see it
            </Typography>
          </Grid>
        </Grid>
      </Fade>
      <Fade bottom>
        <SmallHeader>Refine</SmallHeader>

        <Grid container alignItems="start" marginTop={2}>
          <Grid item lg={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Design Iteration | Participant's Dashboard
            </Typography>
            <Typography variant="h6">
              Add a new functionality — "current filters," which allows
              participants to track/edit the current filters easily.
            </Typography>
            <Stack direction="row" justifyContent="end" marginRight={3}>
              <Image
                duration={0}
                src={leftDownArrow}
                fit="contain"
                height="80px"
                width="80px"
                align="right"
              />
            </Stack>
            <Image duration={0} src={refine1New} fit="contain" height="auto" />
          </Grid>
          <Grid item lg={5} marginTop={5}>
            <Image duration={0} src={refine1Old} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container alignItems="start" marginTop={10}>
          <Grid item lg={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Design Iteration | Researcher's Survey History
            </Typography>
            <Typography variant="h6">
              Show all surveys in a table instead of cards to clearly show
              information of created surveys
            </Typography>
            <Stack direction="row" justifyContent="end" marginRight={3}>
              <Image
                duration={0}
                src={leftDownArrow}
                fit="contain"
                height="80px"
                width="80px"
                align="right"
              />
            </Stack>
            <Image duration={0} src={refine2New} fit="contain" height="auto" />
          </Grid>
          <Grid item lg={5} marginTop={5}>
            <Image duration={0} src={refine2Old} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container alignItems="start" marginTop={10}>
          <Grid item lg={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              03
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Design Iteration | Participant's Take Survey
            </Typography>
            <Typography variant="h6">
              Make the survey information (title and description) sticky at the
              top of the page, which participants can always refer instead of
              having to scroll to the top.
            </Typography>
            <Stack direction="row" justifyContent="end" marginRight={3}>
              <Image
                duration={0}
                src={leftDownArrow}
                fit="contain"
                height="80px"
                width="80px"
                align="right"
              />
            </Stack>
            <Image duration={0} src={refine3New} fit="contain" height="auto" />
          </Grid>
          <Grid item lg={5} marginTop={5}>
            <Image duration={0} src={refine3Old} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={6}>
            <SmallHeader sx={{ marginTop: 0 }}>Design Style</SmallHeader>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="body1">
              I used light grayish orange & dark blue as the main color of the
              entire website. The tenderness hue introduces warmth that balances
              the cool depth of dark blue. The combination of these two
              complementary colors shows a high level of contrast, which makes
              them much easier for an observer to see.
            </Typography>
            <br />
            <Typography variant="body1">
              I decided to use Roboto font, which is easily readable and
              promotes natural reading rhythm.
            </Typography>
            <br />
            <Typography variant="body1">
              I used basic and simple icons in the MUI library, which are
              accessible for users without any confusion.
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}

function FinalDeliverySection() {
  return (
    <>
      <Fade bottom>
        <BigHeader>Final Delivery</BigHeader>

        <Stack alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Try this website live:
          </Typography>
          <Link
            href="https://surveyeasy-psql-mui-5016.fly.dev/"
            color="inherit"
            underline="always"
          >
            https://surveyeasy-psql-mui-5016.fly.dev/
          </Link>
        </Stack>
      </Fade>

      <Fade bottom>
        <SmallHeader>Key Features</SmallHeader>

        <SmallHeader>Researcher Mode</SmallHeader>

        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Survey Info and Filters
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Filters allows researcher to filter for eligible paticipants by
              age, country, gender, etc.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Survey info allows participants to search surveys by title,
              description, category, duration, etc.
            </Typography>
            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              Some responses come from ineligible participants
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliveryResearcherFilter} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Edit Survey & Preview
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Provides multiple choice, multiple answers, short answer question
              types, with a convenient interface to add/delete
              questions/choices.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Preview allows researchers to view the survey as participants
              will.
            </Typography>
            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              Survey requires multiple question types
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliveryPreview} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Past Surveys Table
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Displays past surveys with essential information (title, status,
              progress, etc.)
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Allows sorting of any column to find relevant surveys easily
            </Typography>

            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              Finding past surveys easily
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliverySurveys} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Survey Results
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Provides automatic analysis of survey answers by question, with
              visualization
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Viewing answers by response and downloading survey data as JSON
            </Typography>

            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              View responses with automatic data visualization
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliveryResult} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <SmallHeader>Participant Mode</SmallHeader>

        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Search and Filters
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Allows searching for surveys of interest by keyword or filter by
              category, duration, or time sensitivity.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Displays current filters for easy viewing and editing
            </Typography>

            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              It's difficult to find surveys that are interesting.
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliveryParticipantFilter} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={5}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Taking Surveys
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              01
            </Typography>
            <Typography variant="h6">
              Title and description are sticky at the top of the page for easy
              viewing
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              02
            </Typography>
            <Typography variant="h6">
              Allow saving drafts and continuing later from the drafts page
            </Typography>

            <Typography
              variant="h6"
              display="inline-block"
              sx={{ color: "#8B3C97", fontWeight: "bold", marginTop: 5 }}
            >
              Pain point:
            </Typography>
            <Typography variant="h6" display="inline">
              {" "}
              It's difficult to save the progress on a survey, then find it and
              continue later.
            </Typography>
          </Grid>

          <Grid item lg={7}>
            <Image duration={0} src={deliveryTake} fit="contain" />
          </Grid>
        </Grid>
      </Fade>

      <Fade bottom>
        <SmallHeader
          sx={{
            fontSize: 32,
            marginTop: 15,
            marginBottom: 5,
            textAlign: "center",
          }}
        >
          Demo
        </SmallHeader>

        <Grid container spacing={3}>
          <Grid item lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-F4uANdtuWc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Yef0sYWpO1s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}
