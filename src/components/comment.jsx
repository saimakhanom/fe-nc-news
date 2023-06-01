import { formatDate } from "../utils/format-article-date";
import Divider from "./divider";

export default function Comment({comment}) {

    return (
        <div>
            <p>{formatDate(comment.created_at)} | {comment.author}</p>
            <p>{comment.body}</p>
            <Divider/>
        </div>
    )
}