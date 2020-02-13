import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../redux/actions";
import ListItems from "./BookmarkListItem";
import AddBookmark from "./AddBookmark";

class List extends Component {
  renderForm = () => <AddBookmark />;

  renderToDo() {
    const {
      data: { bookmarks }
    } = this.props;
    const toDos = _.map(bookmarks, (value, key) => {
      return <ListItems key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return <h4 style={{ textAlign: "center" }}>Loading Bookmark......</h4>;
  }
  componentWillMount() {
    // this.props.fetchBookmarksWithThunk();
    this.props.fetchBookmarksWithSaga();
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
