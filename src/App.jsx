import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import ArticleTemplate from "./components/article-template";
import { ArticlesProvider } from "./contexts/articles-context";

function App() {
  return (
    <>
      <Nav />
      <ArticlesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticleTemplate />} />
        </Routes>
      </ArticlesProvider>
    </>
  );
}

export default App;
