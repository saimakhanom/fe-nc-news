import { patchArticleVote } from "../utils/api-calls";
import up from "../assets/up.png";
import down from "../assets/down.png";
import { useContext } from "react";
import { ArticlesContext } from "../contexts/articles-context";

export default function Voter({ article_id }) {
  const { setArticles } = useContext(ArticlesContext);

  const upVote = (article_id) => {
    setArticles((prev) => {
      return prev.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes + 1 };
        }
        return article;
      });
    });

    patchArticleVote(article_id, { inc_votes: 1 }).catch((err) => {
      setArticles((prev) => {
        return prev.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes - 1 };
          }
          return article;
        });
      });
    });
  };

  const downVote = (article_id) => {
    setArticles((prev) => {
      return prev.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes - 1 };
        }
        return article;
      });
    });

    patchArticleVote(article_id, { inc_votes: -1 }).catch(() => {
      setArticles((prev) => {
        return prev.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes + 1 };
          }
          return article;
        });
      });
    });
  };

  return (
    <div>
      <button className="voterBtn"
        onClick={() => {
          upVote(article_id);
        }}
      >
        Up vote
        <img src={up} alt="green up arrow" className="arrow"/>
      </button>
      <button className="voterBtn"
        onClick={() => {
          downVote(article_id);
        }}
      >
        Down vote
        <img src={down} alt="red down arrow" className="arrow"/>
      </button>
    </div>
  );
}
