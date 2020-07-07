import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import StreamingView from "./video/pages/StreamingView";
import Streaming from "./video/components/Streaming";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StreamingView />
        </Route>
        <Route path="/liveStreaming" exact>
          <Streaming />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
