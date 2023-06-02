import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils/api-calls";
import Articles from "../components/articles";
import LatestArticlePreview from "../components/latest-article-preview";
import Header from "../components/header";
import Sorter from "../components/sorter";
import { sortByCommentCount } from "../utils/sort-by-comment-count";

export default function TopicPageTemplate() {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
    const { topic_slug } = useParams();
    
  useEffect(() => {
    if (sortBy !== "comment_count") {
      fetchArticlesByTopic(topic_slug, sortBy, orderBy)
        .then((data) => {
          setArticles(data);
          setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    } else {
        sortByCommentCount(setArticles, orderBy);
    }
  }, [topic_slug, sortBy, orderBy]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <>
      <Header />
      <div className="allArticlesContainer">
        <LatestArticlePreview
          latestArticle={articles[0]}
          topic_slug={topic_slug}
        />
        <Sorter setSortBy={setSortBy} setOrderBy={setOrderBy} />
        <Articles articles={articles} />
      </div>
    </>
  );
}
