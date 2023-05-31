import { useEffect, useState } from "react";
import LatestArticlePreview from "./latest-article-preview";
import { fetchAllArticles } from "../utils/api-calls";
import Articles from "./articles";
import Divider from "./divider";

export default function AllArticles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchAllArticles().then((res) => {
            setArticles(res.data.articles)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    
    return (
        <div className="allArticlesContainer">
            <LatestArticlePreview latestArticle={articles[0]} />
            <Divider/>
            <Articles articles={articles} />
        </div>
    )
}