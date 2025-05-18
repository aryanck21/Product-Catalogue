
import { Box, useColorModeValue } from "@chakra-ui/react";

import { Route , Routes } from 'react-router-dom';
import  CreatePage  from "./Pages/CreatePage";
import  HomePage  from "./Pages/HomePage";
import Navbar  from "./Components/Navbar";

function App() {

  return (
      < Box minH= {"100vh"} >
         <Navbar /> 
        <Routes>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Box>

  )
}

export default App;
