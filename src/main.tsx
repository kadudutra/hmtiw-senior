import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Template } from './components/Template'
import { SeniorContextProvider } from './contexts/SeniorContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <SeniorContextProvider>
        <BrowserRouter>
          <Template>
            <App />
          </Template>
        </BrowserRouter>
      </SeniorContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
