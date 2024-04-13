import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <App />
)
//index.js largely responsible for only rendering the App component.
//The App component is responsible for rendering the other components.
//The other components are responsible for rendering their own children.
