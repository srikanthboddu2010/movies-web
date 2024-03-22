import Navbar1 from "./components/navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import "./Style.css"
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar1/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
       </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App;
