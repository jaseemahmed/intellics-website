import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../src/assets/images/logo.jpg";
import bgGif from "../src/assets/images/bg-gif.gif";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={4} md={2}>
          <Box>
            <img width="100%" src={logo} alt="logo" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img width="50%" src={bgGif} alt="" />
          <Typography variant="h4" color="#204c73" gutterBottom>
            Get ready for the change
          </Typography>
          <Typography variant="body1" color="#204c73">
            We are working on something amazing. Please check back later to know more !!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
