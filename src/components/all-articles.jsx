import { useEffect, useState } from "react";
import LatestArticlePreview from "./latest-article-preview";
import { fetchAllArticles } from "../utils/api-calls";
import Articles from "./articles";
import Sorter from "./sorter";
import { sortByCommentCount } from "../utils/sort-by-comment-count";

export default function AllArticles() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  useEffect(() => {
    if (sortBy !== "comment_count") {
      fetchAllArticles(sortBy, orderBy)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      sortByCommentCount(setArticles, orderBy);
    }
  }, [sortBy, orderBy]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="allArticlesContainer">
      <LatestArticlePreview latestArticle={articles[0]} />
      <Sorter setSortBy={setSortBy} setOrderBy={setOrderBy} />
      <Articles articles={articles} />
    </div>
  );
}
