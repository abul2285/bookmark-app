import React, { Component } from "react";
import styled from "styled-components";

import BookMarkList from "./components/BookmarkList";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "./pages/login";

const BookMarkWrap = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 60px 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: url(https://cdn.pixabay.com/photo/2016/01/22/10/48/books-1155557_960_720.jpg);
`;

const BookMarkModal = styled.div`
  padding: 10px 30px;
  border-radius: 5px;
  box-shadow: 0 10px 30px 0 rgba(0, 20, 51, 0.2);
  background-color: #5ff;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BookMarkWrap>
          <BookMarkModal>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" component={BookMarkList} />
          </BookMarkModal>
        </BookMarkWrap>
      </BrowserRouter>
    );
  }
}

export default App;
