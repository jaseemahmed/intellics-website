import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import AboutCards from "./AboutCards";

const About = ({ isMobile }) => {
  const features = [
    {
      title: "Embraces future technology",
      text: "By integrating the latest advancements, we empower our clients to confidently navigate the ever-evolving digital landscape, unlocking new possibilities and shaping tomorrow's opportunities.",
    },
    {
      title: "Provides sophisticated solutions",
      text: "Our commitment to innovation and expertise allows us to deliver advanced, refined solutions that not only address complex problems but also empower our clients with the tools and strategies needed for sustained success.",
    },
    {
      title: "Holds you digitally with Excellence, Integrity & Security",
      text: "We hold you digitally with an uncompromising dedication to excellence, underpinned by a foundation of integrity, and fortified by robust security measures, ensuring a trustworthy and exceptional digital experience.",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: !!isMobile ? "column-reverse" : "row",
        }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {features.map((feature, idx) => (
              <Grid item xs={12} md={4} key={idx} sx={{ display: "flex" }}>
                <AboutCards title={feature.title} text={feature.text} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              position: "relative",
              marginBottom: "3rem",
              "&:before": {
                content: "''",
                width: "50px",
                height: ".5rem",
                position: "absolute",
                backgroundColor: "secondary.light",
                bottom: -5,
                left: 0,
              },
            }}
          >
            About us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              opacity: ".15",
              fontSize: { xs: "5rem" },
              transform: isMobile ? "scale(1)" : "scale(1.2)",
              marginBottom: "2rem",
            }}
            color="primary"
          >
            We
          </Typography>
          <Typography variant="body1">
            As a forward-thinking technology partner, we excel in delivering
            cutting-edge services spanning Cloud Solutions, Networking,
            Security, and IT Infrastructure. Our expertise extends to crafting
            tailored Website & Web Application Solutions, meeting unique
            business needs. Committed to empowering your digital journey, we
            merge technical prowess with a customer-centric approach. Our
            seasoned professionals ensure top-notch services, fostering enduring
            partnerships and striving for growth beyond traditional
            transactions. We are your comprehensive destination for innovative
            IT solutions, committed to excellence and collaborative experiences.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
