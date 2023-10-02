export const filterArticlesBySubtype = (articles, subtype) => {
  return articles.filter((item) => item.subtype === subtype)
}
