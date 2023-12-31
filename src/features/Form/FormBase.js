import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";

const FormBase = ({ isMobile }) => {
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
            Work with us
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
            WORK
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            We, with our dedicated and committed team is always ready to help
            you with all your requirements.
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormBase;
