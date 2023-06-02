import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
import ArticleTemplate from "./components/article-template";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "Log in" });
  
  return (
    <>
      <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleTemplate user={user} />} />
        </Routes>
    </>
  );
}

export default App;
