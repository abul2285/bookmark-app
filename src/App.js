import React, { Component } from "react";
import List from "./components/BookmarkList";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/bookmark" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
