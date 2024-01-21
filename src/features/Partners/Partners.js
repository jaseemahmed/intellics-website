import { Grid } from "@mui/material";
import React from "react";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p5 from "../../assets/images/p5.jpg";
import p6 from "../../assets/images/p6.jpg";
import p7 from "../../assets/images/p7.jpg";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <Grid container sx={{ "& img": { filter: "grayscale(1)" } }}>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p1}
          alt="microsoft partner"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p2}
          alt="microsoft partner"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p3}
          alt="microsoft partner"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p5}
          alt="microsoft partner"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p6}
          alt="microsoft partner"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <motion.img
          whileHover={{
            filter: "grayscale(0)",
            scale: "1.1",
            transition: { duration: 0.25 },
          }}
          width="50%"
          src={p7}
          alt="microsoft partner"
        />
      </Grid>
    </Grid>
  );
};

export default Partners;
