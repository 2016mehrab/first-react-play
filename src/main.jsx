import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from "./context/AuthContext"
import  {theme} from "./theme"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
)
