import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../utils/api-calls";
import { capitaliseFirstLetter } from "../utils/capitalise-first-letter";

export default function NavLinks() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div className="navLinks">
      <Link to="/" className="navLink">
        Home
      </Link>
      {topics &&
        topics.map(({ slug }) => {
          let path = `/${slug}`;
          return (
            <Link to={path} className="navLink" key={slug}>
              {capitaliseFirstLetter(slug)}
            </Link>
          );
        })}
    </div>
  );
}
