import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ArticlesProvider } from './context/ArticlesContext'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <ArticlesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ArticlesProvider>
)
