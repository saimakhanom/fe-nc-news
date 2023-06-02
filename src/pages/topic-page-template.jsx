import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils/api-calls";
import Articles from "../components/articles";
import Divider from "../components/divider";
import LatestArticlePreview from "../components/latest-article-preview";
import Header from "../components/header";

export default function TopicPageTemplate() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic_slug } = useParams();

    useEffect(() => {
        fetchArticlesByTopic(topic_slug).then((data) => {
            setArticles(data)
            setIsLoading(false)
        })
    }, [topic_slug])

    if (isLoading) {
        return <p>Loading articles...</p>
    }

    return (
        <>
            <Header/>
        <div className="allArticlesContainer">
            <LatestArticlePreview latestArticle={articles[0]} topic_slug={topic_slug} />
            <Divider/>
            <Articles articles={articles} />
        </div>
        </>
    )
}

