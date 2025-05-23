import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
    
        <App />
    
    </ChakraProvider>
  </BrowserRouter>
</React.StrictMode>
);
