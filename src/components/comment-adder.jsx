import { useContext, useState } from "react";
import { postComment } from "../utils/api-calls";
import { UserContext } from "../../contexts/userContext";

export default function CommentAdder({ article_id, setComments }) {
    const [comment, setComment] = useState("");
  const { user } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment) {
      postComment(article_id, { username: user.username, body: comment }).then(
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
        <form onSubmit={(e) => { handleSubmit(e) }}>
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
