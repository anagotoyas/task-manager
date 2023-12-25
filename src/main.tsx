import ReactDOM from 'react-dom/client'
import App from './app/index.tsx'
import './index.css'
import { GlobalProvider } from "./context/GlobalContext.js";
import { apolloClient } from "./config/ApolloConfig";
import { ApolloProvider } from "@apollo/client";


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <ApolloProvider client={apolloClient}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ApolloProvider>

)
