import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ListItems from "./ListItem";
import SignIn from "./AddBookmark";
// import "./style.css";

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
    const { showForm, title, url } = this.state;
    if (showForm) {
      return (
        <div id="todo-add-form" className="col s10 offset-s1">
          <SignIn />
          <form onSubmit={this.formSubmit}>
            <div className="input-field">
              <input
                value={title}
                onChange={this.inputChange}
                // id="toDoNext"
                type="text"
                name="title"
              />
              <input
                value={url}
                onChange={this.inputChange}
                // id="toDoNext"
                type="url"
                name="url"
              />
              <label htmlFor="toDoNext">What Next?</label>
            </div>
            <button type="submit">Add Bookmark</button>
          </form>
        </div>
      );
    }
  };
  renderToDo() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      console.log("data", data);
      console.log("value", value);
      return <ListItems key={key} todoId={key} todo={value} />;
      // return <ListItem />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }
  render() {
    const { showForm } = this.state;
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div className="fixed-action-btn">
          <button
            onClick={() => this.setState({ showForm: !showForm })}
            className="btn-floating btn-large black darken-4"
          >
            {showForm ? (
              <i className="large material-icons">-</i>
            ) : (
              <i className="large material-icons">+</i>
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(List);
