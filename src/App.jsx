import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import ArticleTemplate from "./components/article-template";
import TopicPageTemplate from "./pages/topic-page-template";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleTemplate />} />
        <Route path="/:topic_slug" element={<TopicPageTemplate />} />
      </Routes>
    </>
  );
}

export default App;
