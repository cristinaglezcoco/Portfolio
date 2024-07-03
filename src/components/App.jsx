import { Route, Routes } from "react-router-dom";
// import Nav from "./shared/Nav"
import Home from "./pages/Home";
import '../styles/_app.scss'
import Projects from "./pages/Projects";

function App() {
  return (

    <div className="container-app">
      {/* <Nav /> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      
    </div>

  )
}

export default App;