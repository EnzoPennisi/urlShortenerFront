import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0ProviderWithNavigate } from './components/auth0/Auth0ProviderWithNavigate.tsx'
import { UserContextProvider } from './context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>,
)
