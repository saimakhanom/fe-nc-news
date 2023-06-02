import { deleteComment } from "../utils/api-calls";
import { formatDate } from "../utils/format-article-date";
import Divider from "./divider";
import "../styles/delete-comment.css"

export default function Comment({ comment, user, setDeleted, deleted }) {
  const handleDelete = (comment_id) => {
    deleteComment(comment_id).then(() => {
      setDeleted(comment_id);
    });
  };

  return (
    <div>
      {deleted === comment.comment_id && (
        <p>
          <em>Your comment has been deleted.</em>
        </p>
      )}
      {deleted !== comment.comment_id && (
        <div>
          <p>
            {formatDate(comment.created_at)} | {comment.author}
          </p>
          <p>{comment.body}</p>
          {user.username === comment.author && (
            <button className="deleteBtn"
              onClick={() => {
                handleDelete(comment.comment_id);
              }}
            >
              Delete
            </button>
          )}
        </div>
      )}
      <Divider />
    </div>
  );
}
