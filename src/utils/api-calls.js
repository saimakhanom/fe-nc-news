import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchAllArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
};
export const fetchTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const fetchArticleBySlug = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsByArticle = (article_id) => {
    return api
      .get(`/articles/${article_id}/comments`)
      .then((res) => {
        return res.data.comments;
      })
      .catch((err) => {
        return err;
      });
};
  
  
export const fetchArticlesByTopic = (topic_slug) => {
  return api
    .get(`/articles?topic=${topic_slug.toLowerCase()}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      return err;
    });
};

export const patchArticleVote = (article_id, body) => {
  // body should contain key of inc_votes with a positive or negative number
  return api.patch(`articles/${article_id}`, body).then((res) => {
    console.log(res.data.article.votes)
    return res.data.article;
  });
};
