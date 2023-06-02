import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleBySlug } from "../utils/api-calls";
import { formatDate } from "../utils/format-article-date";
import share from "../assets/share.png";
import "../styles/article-template.css";
import ArticleComments from "./article-comments";

export default function ArticleTemplate({user}) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleBySlug(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false)
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading Article...</p>
  }

  return (
    <div className="individualArticleContainer">
      {article && (
        <div>
          <h1>{article.title}</h1>
          <div className="article-info">
            <div className="shareAndAuthor">
              <button className="shareBtn" onClick={()=>{alert("Thanks for sharing this article!")}}>
                <img src={share} alt="share to social media button" className="shareBtnImg" />
              </button>
              <p>
                <strong>
                  <em>By {article.author}</em>
                </strong>
              </p>
            </div>
            <p>
              {formatDate(article.created_at)} | {article.topic} |{" "}
              {article.votes} votes
            </p>
          </div>
          <img
            src={article.article_img_url}
            alt={article.title}
            className="articleImg"
          />
          <p>{article.body}</p>
        </div>
      )}
      <ArticleComments article_id={article_id} user={user}/>
    </div>
  );
}
