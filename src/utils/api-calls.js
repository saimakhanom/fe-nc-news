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
  
export const postComment = (article_id, body) => {
  // body needs username and body of comment, posted to correct article endpoint
  // response
  //   `comment_id: 19,
  //     body: "This is the best comment ever written!",
  //     article_id: 2,
  //     votes: 0,
  //     author: "icellusedkars",`;
  return api
    .post(`articles/${article_id}/comments`, body)
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {
      return err;
    });
};