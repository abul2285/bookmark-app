import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
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

  // renderForm = () => {
  //   const { showForm } = this.state;
  //   if (showForm) {
  //     return <AddBookmark show={showForm} />;
  //   }
  // };
  renderForm = () => <AddBookmark />;

  renderToDo() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItems key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return <h4 style={{ textAlign: "center" }}>Loading Bookmark......</h4>;
  }
  componentWillMount() {
    this.props.fetchBookmarks();
  }
  render() {
    return (
      <>
        <div>{this.renderForm()}</div>
        <div style={{ textAlign: "center", marginTop: "3em" }}>
          <h2>BookMark List</h2>
          {this.renderToDo()}
        </div>
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
