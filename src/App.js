import {
  Box,
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
import { motion } from "framer-motion";
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
          // backgroundSize: isMobileSmall
          //   ? "200%"
          //   : isMobile
          //   ? "150%"
          //   : "contain",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <Header isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }} id="about">
        <About isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }} id="services">
        <Services isMobile={isMobile} />
      </Container>{" "}
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }}>
        <Testimonial isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }}>
        <Partners isMobile={isMobile} />
      </Container>
      <Container sx={{ minHeight: "auto", padding: "6rem 1rem" }} id="contact">
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
        <Container
          
        >
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
            color="secondary"
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
