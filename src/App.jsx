// import { useState } from 'react'

import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Personal from "./components/Personal.jsx"
import Header from "./Static/Header.jsx"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    
        
        <BrowserRouter>
        <Header/>

        <Routes>
         

        <Route path="/" element ={<Home />} />
        <Route path="/Personal" element ={<Personal/>} />

        </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default App
