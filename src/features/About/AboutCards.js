import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import cardBg from "../../assets/images/cardBgBlue.png";

const AboutCards = ({ title, text }) => {
  return (
    <Card elevation={2} sx={{ borderRadius: 0 }}>
      <CardContent>
        <Box
          sx={{
            minHeight: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              minHeight: "12rem",
              backgroundImage: `url(${cardBg})`,
              backgroundPosition: "top left",
              backgroundSize: { md: "40%", xs: "28%", sm: "16%" },
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "flex-end",
              padding: "0 0 2rem 0",
              margin: "0 0 1rem 0",
            }}
            color="primary"
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            {text}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AboutCards;
