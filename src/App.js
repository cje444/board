import React from "react";
import "./App.css";
import Write from "./Write";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./Home";
import Detail from "./Detail";

function App(props) {
  return (
    <React.Fragment>
      <div className='container'>
        <Route path='/' exact component={Home} />
        <Route path='/write' exact component={Write} />
        <Route path='/detail' exact component={Detail} />
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);
