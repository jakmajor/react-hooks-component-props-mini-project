import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={"jak.io"} />
      <About image={'https://avatars.githubusercontent.com/u/66277064?v=4'} about={"i like code & cats"} />
      <ArticleList blogData={blogData.posts} />
      <Article  />
    </div>
  );
}

export default App;
