import {BrowserRouter, Routes, Route}from "react-router-dom"
import AboutAPP from "./component/AboutAPP"
import Songs from "./component/Songs" 
import Song from "./component/Song"
import Album from "./component/Album" 
function App() {
  return (
   <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutAPP />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/song/:id' element={<Song />} />
        <Route path='/album/:id' element={<Album />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
