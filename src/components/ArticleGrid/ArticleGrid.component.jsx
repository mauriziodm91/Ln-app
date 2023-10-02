import React, { useContext, useState, useEffect } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'
import { filterArticlesBySubtype } from '../../utils/filterArticleBySubtype'
import Banner from '../Banner/Banner.component'
import ArticleItem from '../ArticleItem/ArticleItem.component'

const ArticleGrid = () => {
  const { articles } = useContext(ArticlesContext)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    if (articles) {
      const filteredArticles = filterArticlesBySubtype(articles.articles, '7')
      setEntries(filteredArticles)
    }
  }, [articles])

  return (
    <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
      {entries.length > 0 &&
        entries.map((entry, index) => (
          <React.Fragment key={entry._id}>
            <ArticleItem
              date={entry.display_date}
              image={entry.promo_items.basic.url}
              headline={entry.headlines.basic}
            />
            {index % 3 === 2 && <Banner bannerSize='--small --mobile' />}
          </React.Fragment>
        ))}
    </section>
  )
}

export default ArticleGrid
