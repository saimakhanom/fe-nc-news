import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const fetchAllArticles = () => {
    return api.get('/articles')
}
export const fetchTopics = () => {
    return api.get('/topics')
}

export const patchArticleVote = (article_id, body) => {
    // body should contain key of inc_votes with a positive or negative number
    return api
      .patch(`articles/${article_id}`, body)
      .then((res) => {
        return res.data.article;
      })
      .catch((err) => {
        return err;
      });
  };