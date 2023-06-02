import { formatDate } from "../utils/format-article-date";
import { capitaliseFirstLetter } from "../utils/capitalise-first-letter";
import { Link } from "react-router-dom";

export default function LatestArticlePreview({ latestArticle , topic_slug}) {
  return (
    <div className="latestArticle">
      {topic_slug && <h2>Latest in {topic_slug}</h2>}
      {!topic_slug && <h2>Latest</h2>}

      {latestArticle && (
        <Link to={`/articles/${latestArticle.article_id}`} className="latestArticleContainer">
          <img
            src={latestArticle.article_img_url}
            alt=""
            className="latestArticleImg"
          />
          <div className="latestArticleInfo">
            <h2>{latestArticle.title}</h2>
            <p>
              {formatDate(latestArticle.created_at)} |{" "}
              {capitaliseFirstLetter(latestArticle.topic)}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
