import React, { useEffect, useState } from "react";
import "./App.css";
import Write from "./Write";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./Home";
import Article from "./Article";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://spartacodingclub.shop/hh99/board/list", requestOptions)
      .then((response) => response.json())
      .then((result) => setArticles(result.articles))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <React.Fragment>
      <div className='container'>
        <Route path='/' exact render={() => <Home articles={articles} />} />
        <Route path='/write' exact component={Write} />
        <Route path='/article' render={() => <Article articles={articles} />} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(App);
