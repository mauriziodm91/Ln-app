import { useState, createContext, useEffect } from 'react'

export const ArticlesContext = createContext({
  articles: {},
})

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) {
          throw new Error('error Status: ' + response.status)
        }
        const data = await response.json()
        setArticles(data)
      } catch (error) {}
    }
    getArticles()
  }, [])

  const value = {
    articles,
  }

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
