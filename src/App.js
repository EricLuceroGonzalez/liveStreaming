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
import ShowWindowDimensions from "./shared/ShowWindowDim";
import UserBuyTicket from "./user/UserBuyTicket";

function App() {
  return (
    <Router>
    <div
    style={{
      position: "fixed",
      zIndex: "1000",
      color: "purple",
      fontFamily: "monospace",
    }}
  >
    <ShowWindowDimensions />
  </div>
      <Switch>
        <Route path="/" exact>
          <StreamingView />
        </Route>
        <Route path="/liveStreaming" exact>
          <UserBuyTicket/>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
