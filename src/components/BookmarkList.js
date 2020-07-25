import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../redux/actions";
import ListItems from "./BookmarkListItem";
import AddBookmark from "./AddBookmark";
import { Container } from "@material-ui/core";

class BookMarkList extends Component {
  renderForm = () => <AddBookmark />;

  renderBookmark() {
    const {
      data: { bookmarks },
    } = this.props;
    const bookmarkslist = _.map(bookmarks, (value, key) => {
      return <ListItems key={key} bookmarkId={key} bookmark={value} />;
    });
    if (!_.isEmpty(bookmarkslist)) {
      return bookmarkslist;
    }
    return <h4 style={{ textAlign: "center" }}>Loading Bookmarks...</h4>;
  }
  componentWillMount() {
    this.props.fetchBookmarksWithSaga();
  }
  render() {
    return (
      <>
        <div>{this.renderForm()}</div>
        <div style={{ textAlign: "center", marginTop: "3em" }}>
          <h2>BookMark List</h2>
          {this.renderBookmark()}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, actions)(BookMarkList);
