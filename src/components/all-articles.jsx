import { useEffect, useState } from "react";
import LatestArticlePreview from "./latest-article-preview";
import { fetchAllArticles } from "../utils/api-calls";
import Articles from "./articles";
import Divider from "./divider";

export default function AllArticles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    if (isLoading) {
        return <p>Loading articles...</p>
    }

    return (
        <div className="allArticlesContainer">
            <LatestArticlePreview latestArticle={articles[0]} />
            <Divider/>
            <Articles articles={articles} />
        </div>
    )
}