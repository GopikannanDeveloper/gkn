import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/style.css"
import "./Styles/fontStyles/fontStyles.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position="bottom-left"/>
  </StrictMode>,
)
