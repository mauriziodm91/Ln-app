import { useState, useEffect, useContext } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'
import Tag from '../Tag/Tag.component'
import { groupAndCountTags } from '../../utils/groupAndCountTags'

const TagsContainer = () => {
  const { articles } = useContext(ArticlesContext)
  const [reports, setReports] = useState([])

  useEffect(() => {
    if (articles) {
      setReports(articles.articles)
    }
  }, [articles])

  const tags = groupAndCountTags([...reports]).slice(0, 10)

  return (
    <div id='' className='cont_tags com-secondary-tag hlp-marginBottom-20'>
      {tags.map(({ slug, text }, id) => (
        <Tag text={text} slug={slug} key={id} />
      ))}
    </div>
  )
}

export default TagsContainer
