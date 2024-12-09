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
import { AiOutlineArrowRight } from "react-icons/ai";
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
import wireframe from "../../assets/images/surveyeasy/lo-fi-wireframe.png";
import colorLight from "../../assets/images/surveyeasy/color-light.png";
import colorDark from "../../assets/images/surveyeasy/color-dark.png";
import roboto from "../../assets/images/surveyeasy/roboto.png";

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
            Live website
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
        <Container>
          <BigHeader>Process</BigHeader>
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
        <Container ref={sectionRefs[0]}>
          <DiscoverSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container ref={sectionRefs[1]}>
          <EmpathizeAndDefineSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container ref={sectionRefs[2]}>
          <IdeateAndPrototypeSection />
        </Container>
      </Fade>
      <Fade bottom>
        <Container ref={sectionRefs[3]}>
          <ValidateSection />
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
          marginBottom: 15,
        }}
      >
        <Grid item lg={4}></Grid>
        <Grid item lg={8}>
          <Image duration={0} src={personaR} fit="contain" />
          <Typography variant="body1" sx={{ marginBottom: 5 }}>
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
          <Typography variant="body1" align="center" sx={{ marginBottom: 10 }}>
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
          <Typography variant="body1" sx={{ marginBottom: 5 }}>
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
          <Typography variant="body1" align="center" sx={{ marginBottom: 10 }}>
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
      <SmallHeader>Low-Fidelity Wireframe</SmallHeader>
      <Image duration={0} src={wireframe} fit="contain" />
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

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <SmallHeader sx={{ marginTop: 0 }}>Design Style</SmallHeader>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="body1">
            I used Light grayish orange & Dark blue as the main color of the
            entire website. The tenderness hue introduces warmth that balances
            the cool depth of Dark blue. The combination of these two
            complementary colors shows a high level of contrast, which makes
            them much easier for an observer to see.
          </Typography>
          <br />
          <Typography variant="body1">
            I decided to use Roboto Font, as they are easily readable.
          </Typography>
          <br />
          <Typography variant="body1">
            I used basic and simple icons. I would like to make sure these icons
            are accessible for users without any confusion.
          </Typography>
        </Grid>
      </Grid>

      {/* <Stack direction="row" height={100} justifyContent="center">
        <Image duration={0} src={colorLight} width="10%" />
        <Image duration={0} src={colorDark} width="10%" />
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Image duration={0} src={roboto} width="50%" />
      </Stack> */}
    </>
  );
}

function FinalDeliverySection() {
  return (
    <>
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
      {/* <SmallHeader>Key Features</SmallHeader> */}

      {/* <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Filter
          </Typography>
          <Typography variant="body1">
            01. (Two Advantages: one for filtering surveys, the other one for
            quick filter participants with only a few clicks while creating
            surveys. Function: eliminate mismatch)
          </Typography>
          <Typography variant="body1">
            useful in situations where the user may not know exactly the exact
            word of title to search for or where choosing from a list of search
            criteria is faster than typing in all the search terms.
          </Typography>
          <Typography variant="body1">
            → Pain point: Take long time for selecting a preferred survey
          </Typography>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid> */}

      {/* <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sort All surveys, can sort each column name individually
          </Typography>

          <Typography variant="body1"></Typography>

          <Typography variant="body1">→ Pain point: </Typography>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item lg={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Automatic analysis of survey results (counting, visualization)
          </Typography>

          <Typography variant="body1"></Typography>

          <Typography variant="body1">→ Pain point: </Typography>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid> */}
    </>
  );
}
