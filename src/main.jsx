import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/montserrat/500.css'; // Medium (500)
import '@fontsource/montserrat/700.css';
import { ImageCacheProvider } from './components/ImageCacheContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageCacheProvider>
      <App />
    </ImageCacheProvider>
  </StrictMode>,
)
