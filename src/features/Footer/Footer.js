import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Form from "../Form/Form";
import logo from "../../assets/images/logo.jpg";
import { HashLink } from "react-router-hash-link";
import { MenuItems } from "../../Constants/MenuItems";

const Footer = ({ isMobile }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          backgroundColor: "secondary.main",
          alignItems: "flex-start",
          minHeight: "350px",
          justifyContent: "space-between",
          flexDirection: !!isMobile && "column-reverse",
        }}
      >
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "text.white",
              padding: "1rem",
              "& img": { maxWidth: "100%" },
            }}
          >
            <img width="100%" src={logo} alt="logo" />
          </Box>
          <Box sx={{ margin: "1rem 0", color: "text.white" }}>
            {/* <Typography variant="body1" gutterBottom>
              Pineapple
            </Typography> */}
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              P.O. Box: 000000
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Abu Dhabi, UAE
            </Typography>
          </Box>
          <Divider sx={{ margin: "1rem 0", borderColor: "secondary.dark" }} />
          <Box>
            <Typography
              variant="body1"
              color="text.white"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              &copy; - 2024 Intellics L.L.C
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            alignSelf: isMobile ? "center" : "flex-end",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            sx={{
              //   minWidth: "100%",
              "& a": { color: "text.white", textDecoration: "none" },
              margin: "1rem 0",
            }}
            component={List}
          >
            {MenuItems.map((item, idx) => (
              <span key={idx}>
                {idx !== 0 && (
                  <ListItem key={idx} sx={{ minWidth: "max-content" }}>
                    <ListItemText
                      sx={{
                        "& a": { textDecoration: "none", color: "text.white" },
                      }}
                    >
                      <HashLink to={`${item.link}`} smooth>
                        {item.label}
                      </HashLink>
                    </ListItemText>
                  </ListItem>
                )}
              </span>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
