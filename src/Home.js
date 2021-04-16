import React from "react";
import ElTable from "./ElTable";
import Header from "./Header";

const Home = (props) => {
  const articles = props.articles;
  return (
    <div className='container'>
      <Header />
      <ElTable articles={articles} />
    </div>
  );
};
export default Home;
