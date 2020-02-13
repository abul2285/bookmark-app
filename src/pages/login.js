import React, { useState } from "react";
import { createUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Grid, Box } from "@material-ui/core";
import { object, string } from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = value => {
    dispatch(createUser(value));
    history.push("/bookmark");
  };

  return (
    // <Grid container justify="center" alignItems="center">
    <Grid
      container
      // spacing={4}
      justify="center"
      style={{
        backgroundColor: "#ccc",
        maxWidth: "600px",
        margin: "20vh auto",
        padding: "1em"
      }}
    >
      <Grid item xs={10}>
        <Box component="h1" textAlign="center">
          Sign Up
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={object({
            email: string()
              .required()
              .email(),
            password: string().required()
          })}
        >
          {() => (
            <Form>
              <Field
                name="email"
                required
                as={TextField}
                varian="outlined"
                margin="normal"
                type="email"
                id="email"
                label="Email"
                fullWidth
                autoFocus
                autoComplete="off"
                mb="4em"
              />
              <ErrorMessage name="email" />
              <Field
                name="password"
                required
                as={TextField}
                label="Password"
                fullWidth
                autoComplete="off"
              />
              <ErrorMessage name="password" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                style={{ marginTop: "50px" }}
              >
                SIGN UP
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default React.memo(Login);
