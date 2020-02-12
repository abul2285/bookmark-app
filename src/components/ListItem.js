import React, { Component } from "react";
// import Grid from "@material-ui/core/Grid";
import {
  FaTextHeight,
  FaBlog,
  FaBlogger,
  FaLink,
  FaTrash
} from "react-icons/fa";
import { ListItem, ListItemText, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ListItems extends Component {
  completeClick = completeTodoId => {
    const { completeToDo } = this.props;
    completeToDo(completeTodoId);
  };
  render() {
    const { todoId, todo } = this.props;
    return (
      // <div key="toDoName" className="col s10 offset-s1 to-do-list-item black">
      <Grid container justify="center">
        <Grid item xs={8}>
          <ListItem button devider>
            <FaLink color="green" size="25" style={{ margin: "20px" }} />
            <a href={todo.url} target="_blank">
              <ListItemText primary={todo.title} />
            </a>
            <FaTrash color="red" size="25" style={{ marginLeft: "auto" }} />
          </ListItem>
          {/* <h4>
            <a href={todo.url} target="_blank">
              {todo.title}
            </a>
            <span
              onClick={() => this.completeClick(todoId)}
              className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
            >
              <i className="large material-icons">Done</i>
            </span>
          </h4> */}
        </Grid>
      </Grid>
      // </div>
    );
  }
}

export default connect(null, { completeToDo })(ListItems);
