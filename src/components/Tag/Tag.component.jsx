const Tag = ({ text, slug }) => {
  return <a href={`/tema/${slug}`}>{text}</a>
}

export default Tag
