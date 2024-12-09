import {
  Container,
  CssBaseline,
  Grid,
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
import Navbar from "../../components/container/navbar";
import userFlowImage from "../../assets/images/ta-management/user-flow.png";
import cover from "../../assets/images/ta-management/cover.png";
import wireframe1 from "../../assets/images/ta-management/wireframe1.png";
import wireframe2 from "../../assets/images/ta-management/wireframe2.png";
import wireframe3 from "../../assets/images/ta-management/wireframe3.png";
import wireframe4 from "../../assets/images/ta-management/wireframe4.png";
import wireframe5 from "../../assets/images/ta-management/wireframe5.png";
import database from "../../assets/images/ta-management/database.png";
import mcgill from "../../assets/images/ta-management/mcgill.jpeg";
import { BigHeader, SmallHeader } from "./components";

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
        <Stack ref={sectionRefs[2]}>
          <IdeateAndPrototypeSection />
        </Stack>
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

function IdeateAndPrototypeSection() {
  return (
    <>
      <Container>
        <BigHeader>Ideate & Prototype</BigHeader>

        <SmallHeader>User Flow</SmallHeader>
        <Stack alignItems="center">
          <Image duration={0} src={userFlowImage} fit="contain" width="60%" />
        </Stack>
        <SmallHeader>Wireframe</SmallHeader>
      </Container>

      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Image duration={0} src={wireframe1} fit="contain" />
          </Grid>
          <Grid item lg={6}>
            <Image duration={0} src={wireframe2} fit="contain" />
          </Grid>
        </Grid>
      </Container>

      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Image duration={0} src={wireframe3} fit="contain" />
        </Grid>
        <Grid item lg={4}>
          <Image duration={0} src={wireframe4} fit="contain" />
        </Grid>
        <Grid item lg={4}>
          <Image duration={0} src={wireframe5} fit="contain" />
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item lg={6}>
            <SmallHeader sx={{ marginTop: 0 }}>Design Style</SmallHeader>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="body1">
              The main color we chose is McGill Red (#ED1B2F) and white that
              aligns with the university's visual identity, and provides a
              simple and clean view.
            </Typography>
            <Image duration={0} src={mcgill} fit="contain" height="60px" />

            <Typography variant="body1">
              We used simple and easy-to-understand icons in the Bootstrap and
              MUI libraries so that these icons are conveniently recognizable at
              a glance by the user.
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
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

      <iframe
        width="1120"
        height="730"
        src="https://www.youtube.com/embed/kCIjidPASZc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
