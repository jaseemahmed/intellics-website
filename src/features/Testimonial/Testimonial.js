import { Box, Grid, Typography } from "@mui/material";
import { testimonialData } from "../../Constants/TestimonialData";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = ({ isMobile }) => {
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
          <TestimonialSlider data={testimonialData} />
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
            What our Clients says
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
            Great
          </Typography>
          <Typography variant="body1" >
            Discover what our clients are saying about their experiences with
            us. From innovative solutions to unparalleled customer service, our
            testimonials showcase the value we bring to businesses.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;
