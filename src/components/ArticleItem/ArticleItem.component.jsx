import { formatDateInSpanish } from '../../utils/formatDateInSpanish'
const ArticleItem = ({ image, date, headline }) => {
  return (
    <article className='mod-caja-nota lugares w-100-mobile'>
      <section id='' className='cont-figure'>
        <a href='' className='figure'>
          <picture id='' className='content-pic picture'>
            <img src={image} alt='' className='content-img' />
          </picture>
        </a>
      </section>
      <div className='mod-caja-nota__descrip'>
        <h2 className='com-title-acu'>
          <a href=''>{headline}</a>
        </h2>
        <h4 className='com-date'>{formatDateInSpanish(date)}</h4>
      </div>
    </article>
  )
}

export default ArticleItem
