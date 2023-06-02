import { formatDate } from "../utils/format-article-date";
import Divider from "./divider";
import { capitaliseFirstLetter } from "../utils/capitalise-first-letter";
import { Link } from "react-router-dom";

export default function Articles({ articles }) {
  return (
    <div className="allArticleCards">
      {articles &&
        articles.map((article, index) => {
          if (index === 0) {
            return;
          }
          return (
            <Link to={`/articles/${article.article_id}`} key={article.title}>
              <div className="articleCardContainer">
                <img
                  src={article.article_img_url}
                  alt={article.title}
                />

                <div>
                  <h3 className="title">{article.title}</h3>
                  <h4 className="author">By {article.author}</h4>
                  <p>
                    {formatDate(article.created_at)} |{" "}
                    {capitaliseFirstLetter(article.topic)} | {article.comment_count} comments | {article.votes} votes
                  </p>
                </div>
              </div>

              <Divider />
            </Link>
          );
        })}
    </div>
  );
}
