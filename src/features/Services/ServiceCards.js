import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ServiceCards = ({ image, icon, title, content }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        "&:hover": {
          ".MuiCardMedia-root": {
            transform: "scale(1.1)",
            transition: ".5s ease",
          },
        },
      }}
    >
      <CardMedia component="img" image={image} />
      <CardContent sx={{ flex: 1, padding: "2rem" }}>
        <Typography color="primary" gutterBottom>
          {icon}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "2rem" }}>
        <Button size="medium" color="secondary" variant="contained">
          Enquire now
        </Button>
      </CardActions>
    </Card>

    // <Card
    //   elevation={6}
    //   // sx={
    //   //   {
    //   //     // backgroundImage: `url(${image})`,
    //   //     // backgroundSize: "cover",
    //   //     // backgroundRepeat: "no-repeat",
    //   //     // backgroundPosition: "center",
    //   //     // minHeight: "600px",
    //   //     // maxHeight: "600px",
    //   //     // display: "flex",
    //   //     // alignItems: "flex-end",
    //   //     // borderRadius: 0,
    //   //   }
    //   // }
    //   // onMouseOver={() => setIsHover(true)}
    //   // onMouseOut={() => setIsHover(false)}
    // >
    //   <CardMedia component="img" image={image} />

    //   <CardContent
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-between",
    //       height: "auto",
    //     }}
    //   >
    //     <Box>
    //       <Typography color="primary">{icon}</Typography>
    //       <Typography variant="h6" gutterBottom>
    //         {title}
    //       </Typography>
    //     </Box>
    //     <Box>
    //       <Typography variant="body1" gutterBottom>
    //         {content}
    //       </Typography>
    //     </Box>
    //     <Box>
    //       <Button
    //         size="medium"
    //         color="secondary"
    //         variant="contained"
    //         sx={{ margin: "auto" }}
    //       >
    //         Enquire now
    //       </Button>
    //     </Box>
    //   </CardContent>
    //   {/* <Box
    //     sx={{
    //       padding: "1rem",
    //       color: "text.white",
    //       backgroundColor: "primary.main",
    //       width: "100%",
    //       transform: isHover ? "translateY(0)" : "translateY(10%)",
    //       transition: ".2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         minHeight: isHover ? "560px" : "100px",
    //         maxHeight: isHover ? "560px" : "100px",
    //       }}
    //     >
    //       <Box>
    //         {icon}
    //         <Typography variant="h6">{title}</Typography>
    //       </Box>
    //       {!!isHover && (
    //         <Box>
    //           <Divider
    //             orientation="horizontal"
    //             sx={{
    //               borderColor: "text.white",
    //               width: "100%",
    //               margin: ".5rem 0 2rem 0",
    //             }}
    //           />
    //           <Box>
    //             <Typography variant="body1" >
    //               {content}
    //             </Typography>
    //             <Button
    //               size="medium"
    //               color="secondary"
    //               variant="contained"
    //               sx={{ margin: "2rem 0" }}
    //             >
    //               Enquire now
    //             </Button>
    //           </Box>
    //         </Box>
    //       )}
    //     </Box>
    //   </Box> */}
    // </Card>
  );
};

export default ServiceCards;
