import { useState } from "react";
import { postComment } from "../utils/api-calls";
import "../styles/comment-adder.css";

export default function CommentAdder({ article_id, setComments, user }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    console.log(user)
    e.preventDefault();
    if (comment) {
      if (user.username !== "Log in") {
        setError("");
        setComment("");
       setSuccess("Your comment has been posted!")
        postComment(article_id, {
          username: user.username,
          body: comment,
        }).then((data) => {
          setComments((prev) => {
            return [data, ...prev];
          }).catch(() => {
            setError("Your comment could not be posted at this time. Please try again later.")
          })
        });
      } else {
        setError("You must be logged in to post a comment");
      }
    } else {
      setError("Please complete the field to add a comment");
    }
  };

  return (
    <div className="commentAdder">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
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
      {error && (
        <p className="error">
          <em>{error}</em>
        </p>
      )}
      
    </div>
  );
}
