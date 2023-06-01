export const fetchArticleBySlug = (article_slug) => {
  return api
    .get(`/articles/${article_slug}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      return err;
    });
};
