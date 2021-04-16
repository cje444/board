import React from "react";
import "./App.css";
import Write from "./Write";
import { Route } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

function App(props) {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <div className='container'>
          <Route path='/' exact component={Home} />
          <Route path='/write' exact component={Write} />
          <Route path='/article' exact component={Article} />
        </div>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
