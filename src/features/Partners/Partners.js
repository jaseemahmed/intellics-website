import { Box, Card, CardMedia, Grid, useTheme } from "@mui/material";
import React from "react";
import symantec from "../../assets/images/symantec.jpg";
import eset from "../../assets/images/eset.jpg";
import fortinet from "../../assets/images/fortinet.jpg";
import microsoft from "../../assets/images/microsoft.jpg";
import sophos from "../../assets/images/sophos.jpg";
import hemidal from "../../assets/images/hemidal.jpg";
import veeam from "../../assets/images/veeam.jpg";
import watchguard from "../../assets/images/watchguard.jpg";
import lenovo from "../../assets/images/lenovo.jpg";
import dell from "../../assets/images/dell.jpg";
import veritas from "../../assets/images/veritas.jpg";
import kaspersky from "../../assets/images/kaspersky.jpg";
import zebra from "../../assets/images/zebra.jpg";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = ({ isMobile }) => {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    easing: "ease-in-out",
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const partners = [
    {
      title: "symantec",
      image: symantec,
    },
    {
      title: "eset",
      image: eset,
    },
    {
      title: "fortinet",
      image: fortinet,
    },
    {
      title: "microsoft",
      image: microsoft,
    },
    {
      title: "sophos",
      image: sophos,
    },
    {
      title: "hemidal",
      image: hemidal,
    },
    {
      title: "veeam",
      image: veeam,
    },
    {
      title: "watchguard",
      image: watchguard,
    },
    {
      title: "lenovo",
      image: lenovo,
    },
    {
      title: "dell",
      image: dell,
    },
    {
      title: "veritas",
      image: veritas,
    },
    {
      title: "kaspersky",
      image: kaspersky,
    },
    {
      title: "zebra",
      image: zebra,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{ "& img": { filter: isMobile ? "grayscale(0)" : "grayscale(1)" } }}
    >
      <Grid item xs={12}>
        <Slider {...settings}>
          {partners.map((item, index) => (
            // <Card sx={{ position: "relative", display: "flex" }} key={index} elevation={0}>
            //   <CardMedia
            //     alt={item.title}
            //     component="img"
            //     image={item.image}
            //     sx={{
            //       height: "200px",
            //       objectFit: "contain",
            //       // width: "100%",
            //     }}
            //     // className={classes.carousalMedia}
            //   />
            // </Card>
            <Box sx={{ padding: isMobile ? "1rem" : '3rem' }}>
              <motion.img
                whileHover={{
                  filter: "grayscale(0)",
                  scale: "1.1",
                  transition: {
                    duration: 0.25,
                    type: "spring",
                    stiffness: 100,
                    ease: "linear",
                  },
                }}
                width="100%"
                src={item.image}
                alt="microsoft partner"
              />
            </Box>
          ))}
        </Slider>
      </Grid>
      {/* <Grid
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
      </Grid> */}
    </Grid>
  );
};

export default Partners;
