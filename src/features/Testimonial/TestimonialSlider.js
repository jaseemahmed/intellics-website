import {
  Box,
  Button,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dotsbg from "../../assets/images/dots.svg";
import { motion } from "framer-motion";
const TestimonialSlider = ({ data, isMobile }) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = (e) => {
    e.preventDefault();
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = (e) => {
    e.preventDefault();
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        position: "relative",
        borderRadius: "3rem",
        minHeight: { md: "305px", xs: "600px" },
        margin: "2rem 0",
        "&:before": {
          content: '""',
          backgroundImage: `url(${dotsbg})`,
          backgroundPosition: "left",
          backgroundSize: "contain",
          position: "absolute",
          left: 0,
          bottom: "-25%",
          backgroundRepeat: "no-repeat",
          width: "25%",
          height: "35%",
        },
      }}
    >
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            {data.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: slide === idx ? 1 : 0,
                  y: slide === idx ? 0 : -50,
                }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                key={idx}
              >
                <Box
                  sx={{
                    display: slide === idx ? "block" : "none",
                    "& img": {
                      borderRadius: "2rem",
                      maxWidth: "100%",
                      transform: !!isMobile ? "scale(1)" : "scale(1.2)",
                    },
                    maxWidth: "100%",
                  }}
                  key={idx}
                >
                  <img width="200px" src={item.image} alt={item.altText} />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              margin: "3rem auto",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {data.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: slide === idx ? 1 : 0,
                  y: slide === idx ? 0 : 20,
                }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                key={idx}
              >
                <Box
                  key={idx}
                  sx={{
                    display: slide === idx ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" color="primary" gutterBottom>
                    {item.clientName}
                  </Typography>
                  <Typography variant="h6" color="text.white" gutterBottom>
                    {item.position}
                  </Typography>
                  <Typography variant="body1" color="text.white" gutterBottom>
                    {item.company}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.white"
                    gutterBottom
                    sx={{
                      maxWidth: "80%",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    {item.comment}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "absolute",
          right: "2rem",
          bottom: "-5rem",
          display: "flex",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <Button
            variant="outlined"
            sx={{ margin: "0 .5rem", padding: ".75rem" }}
            color="secondary"
            onClick={(e) => prevSlide(e)}
            type="button"
          >
            <ArrowBackIcon />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <Button
            variant="outlined"
            sx={{ margin: "0 .5rem", padding: ".75rem" }}
            color="secondary"
            onClick={(e) => nextSlide(e)}
            type="button"
          >
            <ArrowForwardIcon />
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
