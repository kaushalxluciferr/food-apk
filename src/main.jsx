import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Storecontextprovider from './context/Storecontext.jsx'
import Home from '../../ka/src/Home.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Storecontextprovider>
  <App/>
  </Storecontextprovider>
  </BrowserRouter>
)
