import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Header"
import { Movie } from "./Context"
import Front from "./Front"
import Detail from "./ViewDetail"
function App() {
 

  return (
    <>
    <Movie>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Front/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
     </Routes>
     </BrowserRouter>
     </Movie>
    </>
  )
}

export default App
