import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { services } from "../../Constants/Services";
import LinedText from "./LinedText";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Form = () => {
  const schema = "";
  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};
  return (
    <Card sx={{ borderRadius: "3rem", zIndex: '999', position: 'relative' }} elevation={4}>
      <CardContent sx={{ padding: "3rem" }}>
        <Box>
          <LinedText text="Write to us" lineWidth={38}/>
          <Box sx={{ margin: "2rem 0" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth margin="normal">
                <Controller
                  control={control}
                  name="services"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Select service"
                      select
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                    >
                      {services?.map((service, idx) => (
                        <MenuItem key={idx} value={service.title}>
                          {service.title}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Name"
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Email"
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Phone"
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Controller
                  control={control}
                  name="message"
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Message"
                      error={!!fieldState?.error}
                      helperText={fieldState?.error?.message}
                      multiline
                      rows={5}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="medium"
                >
                  Enquire now
                </Button>
              </FormControl>
            </form>
          </Box>
          <LinedText text="Connect with us" lineWidth={34}/>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <PhoneAndroidIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
            <MailOutlineIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
            <WhatsAppIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
            <FacebookIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
            <InstagramIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
            <LinkedInIcon
              sx={{
                margin: "0 .5rem",
                color: "text.white",
                backgroundColor: "primary.main",
                padding: ".5rem",
                fontSize: "2rem",
                borderRadius: ".5rem",
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Form;
