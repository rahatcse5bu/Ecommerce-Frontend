import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import MainLayout from './components/MainLayout.jsx'
import ProductProvider from './context/Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ProductProvider>
<Header/>
  <MainLayout/>
</ProductProvider>
  </React.StrictMode>,
)
