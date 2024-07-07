import React from 'react'
import axios from "axios";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{QueryClient,QueryClientProvider} from '@tanstack/react-query'
const querycli=new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={querycli}>
    <App />
  </QueryClientProvider>
    
  </React.StrictMode>,
)
