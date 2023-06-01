import { useEffect, useState } from "react";
import { postComment } from "../utils/api-calls";

export default function CommentAdder({ article_id, setComments }) {
    const [comment, setComment] = useState("");
    
    

  const handleSubmit = () => {
    if (comment) {
      postComment(article_id, { username: "name", body: comment }).then(
        (data) => {
          setComments((prev) => {
            return { data, ...prev };
          });
        }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="comment"
          value={comment}
          id="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <label htmlFor="comment"></label>
        <button>Post comment</button>
      </form>
    </div>
  );
}
