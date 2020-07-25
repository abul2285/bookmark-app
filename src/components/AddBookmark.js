import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaPlus } from "react-icons/fa";
import { Grid } from "@material-ui/core";
import { addBookmarkWithSaga, fetchBookmarksWithSaga } from "../redux/actions";
import Field from "./Field";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddBookmark() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const formSubmit = (event) => {
    event.preventDefault();

    let accessCode = prompt("Enter your access code", "1234");

    if (accessCode == 2285) {
      dispatch(addBookmarkWithSaga({ title, url }));
      dispatch(fetchBookmarksWithSaga());
      setTitle("");
      setUrl("");
      setShowForm(false);
    } else {
      console.log("you have no access");
    }
  };
  if (!showForm) {
    return (
      <Container component="main" maxWidth="sm">
        <Grid item xs={12}>
          <Button
            onClick={() => setShowForm(true)}
            fullWidth
            style={{ margin: "20px" }}
            type="primary-alt"
          >
            <FaPlus size="15" color="green" style={{ marginRight: "10px" }} />{" "}
            Add New Bookmark
          </Button>
        </Grid>
      </Container>
    );
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Your Bookmark Here
        </Typography>
        <form className={classes.form} onSubmit={formSubmit}>
          <Field>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={title}
              placeholder="Enter Your Title"
              autoFocus
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Field>
          <Field>
            <Label>URL</Label>
            <Input
              type="url"
              name="URL"
              placeholder="Enter Your URL"
              value={url}
              autoComplete="off"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Field>
          <Button
            fullWidth
            htmlType="submit"
            className="classes.submit"
            type="primary"
          >
            Add Bookmark
          </Button>
        </form>
      </div>
    </Container>
  );
}
