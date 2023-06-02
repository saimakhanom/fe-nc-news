import { patchArticleVote } from "../utils/api-calls";
import up from "../assets/up.png";
import down from "../assets/down.png";
import { useState } from "react";

export default function Voter({ article_id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);

  const upVote = async (article_id) => {
    try {
      setVotes((prevVotes) => prevVotes + 1);
      await patchArticleVote(article_id, { inc_votes: 1 });
    } catch (err) {
      setVotes((prevVotes) => prevVotes - 1);
    }
  };

  const downVote = async (article_id) => {
    try {
      setVotes((prevVotes) => prevVotes - 1);
      await patchArticleVote(article_id, { inc_votes: -1 });
    } catch (err) {
      setVotes((prevVotes) => prevVotes + 1);
    }
  };

  return (
    <div className="voter">
      <p>{votes} votes</p>
      <button
        className="voterBtn"
        onClick={() => {
          upVote(article_id);
        }}
      >
        <img src={up} alt="green up arrow" className="arrow" />
      </button>
      <button
        className="voterBtn"
        onClick={() => {
          downVote(article_id);
        }}
      >
        <img src={down} alt="red down arrow" className="arrow" />
      </button>
    </div>
  );
}
