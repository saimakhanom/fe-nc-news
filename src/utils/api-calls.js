import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const fetchAllArticles = () => {
    return api.get('/articles').then((res) => {
        return res.data.articles
    })
}
export const fetchTopics = () => {
    return api.get('/topics').then((res) => {
        return res.data.topics
    })
}

export const fetchArticleBySlug = (article_id) => {
    return api
      .get(`/articles/${article_id}`)
      .then((res) => {
        return res.data.article;
      })
      .catch((err) => {
        return err;
      });
  };
  