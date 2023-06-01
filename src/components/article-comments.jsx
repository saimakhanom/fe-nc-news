import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../utils/api-calls";
import Comment from "./comment";

export default function ArticleComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  return (
    <div>
      <h2>Comments</h2>
      <p>{comments.length} comments</p>
      {comments.length > 0 &&
        comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <Comment comment={comment} />
            </div>
          );
        })}
    </div>
  );
}
