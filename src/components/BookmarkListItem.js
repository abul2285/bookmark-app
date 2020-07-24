import React from "react";
import { FaLink, FaTimes } from "react-icons/fa";
import { ListItem, ListItemText, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  deleteBookmarkWithSaga,
  fetchBookmarksWithSaga,
} from "../redux/actions";

function ListItems({ bookmark, bookmarkId }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    let accessCode = prompt("Enter your access code", "1234");

    if (accessCode === 2285) {
      dispatch(deleteBookmarkWithSaga(id));
      dispatch(fetchBookmarksWithSaga());
    } else {
      console.log("you have no access");
    }
  };

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <ListItem button>
          <FaLink color="green" size="25" style={{ margin: "20px" }} />
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={bookmark.title} />
          </a>
          <FaTimes
            color="red"
            size="20"
            onClick={() => handleDelete(bookmarkId)}
            style={{ marginLeft: "auto" }}
          />
        </ListItem>
      </Grid>
    </Grid>
  );
}

export default ListItems;
