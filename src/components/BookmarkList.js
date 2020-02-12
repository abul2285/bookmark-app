import React, { Component } from "react";
import { connect } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import _ from "lodash";
import { Button, Grid } from "@material-ui/core";
import * as actions from "../actions";
import ListItems from "./BookmarkListItem";
import AddBookmark from "./AddBookmark";

class List extends Component {
  state = {
    showForm: false,
    title: "",
    url: ""
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = event => {
    const { title, url } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ title, url });
    this.setState({ title: "", url: "" });
  };

  renderForm = () => {
    const { showForm } = this.state;
    if (showForm) {
      return <AddBookmark show={showForm} />;
    }
  };
  renderToDo() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      console.log("data", data);
      console.log("value", value);
      return <ListItems key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return <h4>You have no more things ToDo!</h4>;
  }
  componentWillMount() {
    this.props.fetchBookmarks();
  }
  render() {
    const { showForm } = this.state;
    return (
      <>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Button
              onClick={() => this.setState({ showForm: !showForm })}
              fullWidth
              style={{ margin: "20px" }}
              variant="contained"
              color="white"
            >
              {showForm ? (
                <FaMinus size="25" color="red" />
              ) : (
                <FaPlus size="25" color="green" />
              )}
            </Button>
          </Grid>
        </Grid>
        <div>{this.renderForm()}</div>
        <div>{this.renderToDo()}</div>
      </>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(List);
