import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const LinedText = ({ text, lineWidth }) => {
  useEffect(() => {
    console.log(lineWidth);
  }, [lineWidth]);

  return (
    <Typography
      color="secondary"
      variant="body1"
      sx={{
        "&:before": {
          content: "''",
          position: "absolute",
          width: `${lineWidth}%`,
          height: "1px",
          backgroundColor: "secondary.dark",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          width: `${lineWidth}%`,
          height: "1px",
          backgroundColor: "secondary.dark",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        },
        position: "relative",
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

export default LinedText;
