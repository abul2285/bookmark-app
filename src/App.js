import React, { Component } from "react";
import BookMarkList from "./components/BookmarkList";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "./pages/login";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" component={BookMarkList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
