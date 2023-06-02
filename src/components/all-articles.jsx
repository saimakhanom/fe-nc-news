import { useEffect, useState } from "react";
import LatestArticlePreview from "./latest-article-preview";
import { fetchAllArticles } from "../utils/api-calls";
import Articles from "./articles";
import Sorter from "./sorter";

export default function AllArticles() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  useEffect(() => {
    fetchAllArticles(sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, orderBy]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="allArticlesContainer">
      <LatestArticlePreview latestArticle={articles[0]} />
      <Sorter setSortBy={setSortBy} setOrderBy={setOrderBy}/>
      <Articles articles={articles} />
    </div>
  );
}
