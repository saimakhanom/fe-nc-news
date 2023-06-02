export const sortByCommentCount = (setArticles, orderBy) => {
    if (orderBy === "desc") {
        return setArticles((prev) => {
            const copy = [...prev]
            return copy.sort((a, b)=> b.comment_count - a.comment_count)
        })
    } else {
        return setArticles((prev) => {
            const copy = [...prev]
            return copy.sort((a, b)=> a.comment_count - b.comment_count)
        })
    }
}