import React, { useState } from "react";
import { FaLink, FaTimes } from "react-icons/fa";
import { ListItem, ListItemText, Grid, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  deleteBookmarkWithSaga,
  fetchBookmarksWithSaga,
} from "../redux/actions";

function ListItems({ bookmark, bookmarkId }) {
  const dispatch = useDispatch();
  const [showDelet, setShowDelete] = useState(false);

  const handleDelete = (id) => {
    let accessCode = prompt("Enter your access code", "delete access code");

    if (accessCode == "abul2285") {
      dispatch(deleteBookmarkWithSaga(id));
      dispatch(fetchBookmarksWithSaga());
    } else {
      console.log("you have no access");
    }
  };
  let title;
  if (bookmark.title.length > 60) {
    title = `${bookmark.title.substring(0, 60)}...`;
  } else {
    title = bookmark.title;
  }

  return (
    <Container component="main" maxWidth="md">
      <Grid item xs={12}>
        <ListItem
          button
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
        >
          <FaLink color="green" size="20" style={{ margin: "15px" }} />
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={title} />
          </a>
          <FaTimes
            color="red"
            size="20"
            onClick={() => handleDelete(bookmarkId)}
            style={{
              marginLeft: "auto",
              opacity: showDelet ? 1 : 0,
            }}
          />
        </ListItem>
      </Grid>
    </Container>
  );
}

export default ListItems;
