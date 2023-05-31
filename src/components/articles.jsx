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
            <Link to={`/${article.article_id}`} key={article.title}>
              <div className="articleCardContainer">
                <img
                  src={article.article_img_url}
                  alt={article.title}
                />

                <div>
                  <h3>{article.title}</h3>
                  <p>
                    {formatDate(article.created_at)} |{" "}
                    {capitaliseFirstLetter(article.topic)}
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
