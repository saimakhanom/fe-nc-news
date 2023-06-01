import { useEffect, useState } from "react";
import { useContext } from "react";
import { ArticlesContext } from "../contexts/articles-context.jsx";
import LatestArticlePreview from "./latest-article-preview";
import { fetchAllArticles } from "../utils/api-calls";
import Articles from "./articles";
import Divider from "./divider";

export default function AllArticles() {
  const [isLoading, setIsLoading] = useState(true);
  const { articles } = useContext(ArticlesContext);
  useEffect(() => {
    if (articles) {
      setIsLoading(false);
    }
  }, [articles]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="allArticlesContainer">
      <LatestArticlePreview latestArticle={articles[0]} />
      <Divider />
      <Articles articles={articles} />
    </div>
  );
}
