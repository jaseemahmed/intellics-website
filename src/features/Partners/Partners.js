import { Grid } from "@mui/material";
import React from "react";
import microsoft from "../../assets/images/microsoft.svg";
import cisco from "../../assets/images/cisco.svg";
import fortinet from "../../assets/images/fortinet.svg";
import kaspersky from "../../assets/images/kaspersky.svg";
import netlify from "../../assets/images/netlify.svg";
import aws from "../../assets/images/aws.svg";

const Partners = () => {
  return (
    <Grid container >
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={microsoft} alt="microsoft partner" />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={cisco} alt="cisco partner" />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={aws} alt="aws partner" />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={fortinet} alt="fortinet partner" />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={kaspersky} alt="kaspersky partner" />
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        sx={{ display: "flex", justifyContent: "center", padding: '2rem' }}
      >
        <img width="100%" src={netlify} alt="netlify partner" />
      </Grid>
    </Grid>
  );
};

export default Partners;
