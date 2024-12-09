import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import ProjectPageUI from "../../components/core-ui/project-page/project-page-ui";
import { ThemeContext } from "../../contexts/theme-context";
import { projectsData } from "../../data/projectsData";

function SurveyEasyPage() {
  return (
    <>
      <Card elevation={0}>
        <CardMedia
          component="img"
          sx={{ objectFit: "contain" }}
          image="https://picsum.photos/2000/300"
        />
      </Card>
      <Container>
        <Typography variant="h2" align="center" sx={{ fontWeight: "bold" }}>
          SurveyEasy
        </Typography>
        <Grid
          container
          sx={{
            marginTop: 1, // distance from title
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Project
            </Typography>
            <Typography variant="body1">
              description description description description description
              description description description description description
              description description description description description
              description
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Background
            </Typography>
            <Typography variant="body1">
              description description description description description
              description description description description description
              description description description description description
              description
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 5,
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} align="right">
              Solutions
            </Typography>
            <Typography variant="body1" align="right">
              description description description description description
              description description description description description
              description description description description description
              description
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                sx={{ objectFit: "contain" }}
                image="https://static.wixstatic.com/media/59a9af_f9fff51e62f442ca81c710c4e82c95a9~mv2.png/v1/crop/x_426,y_666,w_5322,h_3163/fill/w_1902,h_1120,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/PROTO.png"
              />
            </Card>
          </Grid>
        </Grid>

        <Fade bottom>
          <Grid
            container
            sx={{
              marginTop: 5,
            }}
          >
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                1
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                2
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                3
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                4
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                5
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                6
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </>
  );
}

export default SurveyEasyPage;
