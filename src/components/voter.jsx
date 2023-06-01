import { patchArticleVote } from "../utils/api-calls"

export default function Voter({ article_id, setArticles }) {
    
    const upVote = (article_id) => {
        setArticles((prev) => {
            return prev.map((article) => {
                if (article.article_id === article_id) {
                    return {...article, votes: article.votes + 1}
                }
                return article
            })
        })

        patchArticleVote(article_id, { inc_votes: 1 }).catch((err) => {
            setArticles((prev) => {
                return prev.map((article) => {
                    if (article.article_id === article_id) {
                        return {...article, votes: article.votes - 1}
                    }
                    return article
                })
            })
        })
    }

    return (
        <div>

        </div>
    )
}