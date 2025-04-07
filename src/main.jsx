import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast'


// virtual dom  main dom

createRoot(document.getElementById('root')).render(

  <>
  <App />
  <Toaster/>
  </>
)
