import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import bgGif from "../src/assets/images/bg-gif.gif";
import Header from "./features/Header/Header";
import bgImg from "./assets/images/hero-b.png";
import About from "./features/About/About";
import Services from "./features/Services/Services";
import Testimonial from "./features/Testimonial/Testimonial";
import Partners from "./features/Partners/Partners";
import Footer from "./features/Footer/Footer";
import FormBase from "./features/Form/FormBase";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { HashLink } from "react-router-hash-link";
import { motion, transform } from "framer-motion";
import visionImg from "../src/assets/images/vision.jpg";
import missionImg from "../src/assets/images/mission.jpg";
import { Scale } from "@mui/icons-material";
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobileSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const [showFab, setShowFab] = useState(false);
  useEffect(() => {
    const showFabBtn = () => {
      window.scrollY > 410 ? setShowFab(true) : setShowFab(false);
    };
    window.addEventListener("scroll", showFabBtn);
    return () => {
      window.removeEventListener("scroll", showFabBtn);
    };
  }, []);

  return (
    <main style={{ position: "relative" }}>
      <Container
        id="home"
        maxWidth="100%"
        sx={{
          // padding: "0 !important",
          backgroundColor: "primary.main",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: isMobileSmall
            ? "200%"
            : isMobile
            ? "150%"
            : "contain",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <Header isMobile={isMobile} />
      </Container>
      <Container
        sx={{ minHeight: "auto", padding: "6rem 1rem" }}
        id="about"
        maxWidth="xl"
      >
        <About isMobile={isMobile} />
      </Container>
      <Container
        sx={{ minHeight: "auto", padding: "3rem 1rem" }}
        id="services"
        maxWidth="xl"
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "1rem",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <Card
              elevation={2}
              sx={{
                position: "relative",
                "&:hover": {
                  ".MuiCardMedia-root": {
                    transform: "scale(1.2)",
                    transition: ".5s ease",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={visionImg}
                alt="vision"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                }}
              >
                <Box
                  sx={{
                    backdropFilter: "blur(3px) ",
                    backgroundColor: "rgba(88, 134, 70, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                    padding: "2rem",
                    borderRadius: ".5rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" color="white" gutterBottom>
                    Vision
                  </Typography>
                  <Typography variant="body1" color="white">
                    Our vision is to seamlessly connect tomorrow's opportunities
                    with today's innovations, fostering a digital landscape
                    where every interaction is a step towards progress.
                  </Typography>
                  <Typography variant="body1" color="white">
                    <br />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <Card
              elevation={2}
              sx={{
                position: "relative",
                "&:hover": {
                  ".MuiCardMedia-root": {
                    transform: "scale(1.2)",
                    transition: ".5s ease",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={missionImg}
                alt="vision"
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                }}
              >
                <Box
                  sx={{
                    backdropFilter: "blur(3px) ",
                    backgroundColor: "rgba(88, 134, 70, 0.75)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                    padding: "2rem",
                    borderRadius: ".5rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" color="white" gutterBottom>
                    Mission
                  </Typography>
                  <Typography variant="body1" color="white">
                    We are committed to providing tailored and innovative
                    solutions that elevate operational efficiency, enhance
                    digital presence, and ensure the security and growth of our
                    clients in an ever-evolving technological landscape.
                  </Typography>
                  <Typography variant="body1" color="white">
                    <br />
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{ minHeight: "auto", padding: "6rem 1rem" }}
        id="services"
        maxWidth="xl"
      >
        <Services isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }} maxWidth="xl">
        <Testimonial isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }} maxWidth="xl">
        <Partners isMobile={isMobile} />
      </Container>
      <Container
        sx={{ minHeight: "auto", padding: "6rem 1rem" }}
        id="contact"
        maxWidth="xl"
      >
        <FormBase isMobile={isMobile} />
      </Container>
      <Container
        sx={{
          minHeight: "auto",
          backgroundColor: "secondary.main",
          position: "absolute",
          bottom: isMobile ? "-3%" : 0,
          // zIndex: -1,
          minHeight: "350px",
        }}
        maxWidth="100%"
      >
        <Container maxWidth="xl">
          <Footer isMobile={isMobile} />
        </Container>
      </Container>
      {!!showFab && (
        <HashLink to="#home" smooth>
          <Fab
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            size="small"
            color="primary"
            aria-label="add"
            sx={{ position: "fixed", bottom: "3%", right: "1%" }}
          >
            <ArrowUpwardIcon sx={{ color: "text.white" }} />
          </Fab>
        </HashLink>
      )}
    </main>
  );
}

export default App;
