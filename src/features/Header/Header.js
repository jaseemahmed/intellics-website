import React from "react";
import Branding from "./Branding";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MenuItems } from "../../Constants/MenuItems";
import MobNav from "./MobNav";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Header = ({ logo, isMobile }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "transparent" }}
      >
        <CssBaseline />
        <Toolbar sx={{ alignItems: "flex-start", padding: "0 !important" }}>
          <Box
            sx={{
              maxWidth: { md: "25%", lg: "16%", sm: "40%" },
              flexGrow: 1,
              zIndex: 9999,
            }}
          >
            <Branding logo={logo} isMobile={isMobile} />
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            {!!isMobile ? (
              <MobNav />
            ) : (
              <List component={Stack} direction="row">
                {MenuItems.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      width: "max-content",
                      textTransform: "uppercase",
                      color: "text.white",
                    }}
                  >
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
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  sx={{
                    borderRadius: "100px",
                    marginLeft: "2rem",
                    "& a": { textDecoration: "none", color: "text.white" },
                  }}
                >
                  <HashLink to="#contact" smooth>
                    Enquire now
                  </HashLink>
                </Button>
              </List>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item md={6} sm={6} xs={12} sx={{ padding: "3rem 0" }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "38px", textTransform: "uppercase" }}
              gutterBottom
              color="text.white"
            >
              Crafting Tomorrow's <br />
              Technology Today
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body1" gutterBottom color="text.white">
              Embrace innovation and stay ahead in the ever-evolving digital
              landscape with our pioneering IT solutions
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={2} md={3} sm={5} xs={12}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            fullWidth
            sx={{
              padding: "1.2rem",
              borderRadius: 0,
              "&:hover": { letterSpacing: ".125rem" },
              transition: ".2s ease-in",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Explore us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
