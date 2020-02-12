import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaPlus } from "react-icons/fa";
import { Button, Grid } from "@material-ui/core";
import { addBookmark } from "../actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AddBookmark() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const formSubmit = event => {
    event.preventDefault();
    dispatch(addBookmark({ title, url }));
    setTitle("");
    setUrl("");
    setShowForm(false);
  };
  if (!showForm) {
    // return <h3 onClick={() => setShowForm(true)}>hello</h3>;
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Button
            onClick={() => setShowForm(true)}
            fullWidth
            style={{ margin: "20px" }}
            variant="contained"
            // color="white"
          >
            <FaPlus size="25" color="green" style={{ marginRight: "20px" }} />{" "}
            Add New Bookmark
          </Button>
        </Grid>
      </Grid>
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Your Bookmark Here
        </Typography>
        <form className={classes.form} onSubmit={formSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            value={title}
            label="Title"
            name="title"
            autoComplete="off"
            autoFocus
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="url"
            label="Url"
            type="url"
            id="url"
            value={url}
            autoComplete="off"
            onChange={e => setUrl(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Bookmark
          </Button>
        </form>
      </div>
    </Container>
  );
}
