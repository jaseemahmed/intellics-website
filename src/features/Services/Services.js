import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCards from "./ServiceCards";

import { services } from "../../Constants/Services";
import { Scale } from "@mui/icons-material";

const Services = ({ isMobile }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
      >
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
            What we do
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
            DOES
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            We are dedicated to delivering innovative and tailored solutions to
            meet the diverse needs of our clients. Specializing in a wide range
            of services, we provide comprehensive IT solutions to drive business
            growth and efficiency.
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container>
            {services.map((service, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <ServiceCards
                  image={service.image}
                  icon={service.icon}
                  title={service.title}
                  content={service.content}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
