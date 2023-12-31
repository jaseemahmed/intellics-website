import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawer } from "./HeaderSlice";
import { MenuItems } from "../../Constants/MenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";

const MobNav = () => {
  const drawerState = useSelector(
    (state) => state?.header?.headerState?.drawerOpen
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(drawerState);
  }, [drawerState]);

  return (
    <>
      <Drawer
        open={!!drawerState}
        onClose={() => dispatch(handleDrawer(false))}
        anchor="top"
        sx={{
          "& .MuiDrawer-paper": {
            height: 1500,
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: '4rem'
          },
          position: "relative",
          display: "flex",
        }}
      >
        <List
          sx={{
            width: "100%",
            "& a": { textDecoration: "none", color: "secondary.dark" },
          }}
        >
          {MenuItems?.map((item, index) => (
            <HashLink to={`${item.link}`} smooth key={index}>
              <MenuItem
                sx={{
                  justifyContent: "center",
                  textTransform: "uppercase",
                  fontSize: "2rem",
                }}
                onClick={() => {
                  dispatch(handleDrawer(false));
                }}
              >
                {item.label}
              </MenuItem>
            </HashLink>
          ))}
        </List>
        {!!drawerState && (
          <IconButton
            color="secondary"
            size="large"
            onClick={() => {
              dispatch(handleDrawer(false));
            }}
            sx={{ border: "1px solid", fontSize: "3rem" }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Drawer>
      {!drawerState && (
        <Box sx={{ width: "20%", margin: "2rem 0" }}>
          <IconButton
            sx={{ color: "text.white" }}
            size="large"
            onClick={() => {
              dispatch(handleDrawer(true));
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default MobNav;
