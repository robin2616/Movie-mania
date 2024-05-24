import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./Header"
import { Movie } from "./Context"
import Front from "./Front"
import Detail from "./ViewDetail"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Movie>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Front/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
     </Routes>
     </BrowserRouter>
     </Movie>
   
  </React.StrictMode>,
)
