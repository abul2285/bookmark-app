import React from "react";
import { FaLink, FaTrash } from "react-icons/fa";
import { ListItem, ListItemText, Grid } from "@material-ui/core";

function ListItems({ todo }) {
  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <ListItem button>
          <FaLink color="green" size="25" style={{ margin: "20px" }} />
          <a href={todo.url} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={todo.title} />
          </a>
          <FaTrash color="red" size="25" style={{ marginLeft: "auto" }} />
        </ListItem>
      </Grid>
    </Grid>
  );
}

export default ListItems;
