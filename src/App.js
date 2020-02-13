import React, { Component } from "react";
import List from "./components/BookmarkList";
class App extends Component {
  render() {
    return (
      <List />
      // <Router>
      //   <div>
      //     <Navigation />
      //     <hr />
      //     <Route path="/bookmark" component={List} />
      //   </div>
      // </Router>
    );
  }
}

export default App;
