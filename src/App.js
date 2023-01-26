import {BrowserRouter, Routes, Route}from "react-router-dom"
import AboutAPP from "./component/AboutAPP"
import Songs from "./component/Songs" 
function App() {
  return (
   <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutAPP />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
