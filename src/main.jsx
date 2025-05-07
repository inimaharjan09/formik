import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store';


// virtual dom  main dom
createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>

  </>

)