import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../utils/api-calls";
import Comment from "./comment";
import CommentAdder from "./comment-adder";

export default function ArticleComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticle(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  return (
    <div>
      <h2>Comments</h2>
      <p>{comments.length} comments</p>
      <CommentAdder article_id={article_id} setComments={setComments} />
      {comments.length > 0 &&
        comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      {comments.length === 0 && <p>Be the first to comment!</p>}
    </div>
  );
}
