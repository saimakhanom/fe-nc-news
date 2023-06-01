import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticleTemplate() {
  const [article, setArticle] = useState([]);
  const { article_slug } = useParams();

  useEffect(() => {
    fetchArticleBySlug(article_slug).then((article) => {
      setArticle(article);
    });
  }, [article_slug]);

  return (
    <div>
      {article && (
        <div>
                  <h1>{article.title}</h1>
                  <div className="article-info">
                      <p>By {article.author}</p>
                      <p>{formatDate(article.created_at)} | {article.topic}</p>
                  </div>
                  <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
