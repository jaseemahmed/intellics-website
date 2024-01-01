import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ServiceCards = ({ image, icon, title, content }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Card
      elevation={0}
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "600px",
        maxHeight: "600px",
        display: "flex",
        alignItems: "flex-end",
        borderRadius: 0,
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Box
        sx={{
          padding: "1rem",
          color: "text.white",
          backgroundColor: "primary.main",
          width: "100%",
          transform: isHover ? "translateY(0)" : "translateY(10%)",
          transition: ".2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <Box
          sx={{
            minHeight: isHover ? "560px" : "100px",
            maxHeight: isHover ? "560px" : "100px",
          }}
        >
          <Box>
            {icon}
            <Typography variant="h6">{title}</Typography>
          </Box>
          {!!isHover && (
            <Box>
              <Divider
                orientation="horizontal"
                sx={{
                  borderColor: "text.white",
                  width: "100%",
                  margin: ".5rem 0 2rem 0",
                }}
              />
              <Box>
                <Typography variant="body1" >
                  {content}
                </Typography>
                <Button
                  size="medium"
                  color="secondary"
                  variant="contained"
                  sx={{ margin: "2rem 0" }}
                >
                  Enquire now
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ServiceCards;
