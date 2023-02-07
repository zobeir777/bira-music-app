import {BrowserRouter, Routes, Route}from "react-router-dom"
import AboutAPP from "./component/AboutAPP"
import Songs from "./component/Songs" 
import Song from "./component/Song"
import Album from "./component/Album" 
import AboutSinger from "./component/AboutSinger"
import NotFound from "./component/NotFound"
function App() {
  return (
   <div >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Songs />} />
      <Route path='/About' element={<AboutAPP />} />
      <Route path='/song/:id' element={<Song />} />
      <Route path='/album/:id' element={<Album />} />
      <Route path='/about/:id' element={<AboutSinger />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/album/*' element={<NotFound />} />
      <Route path='/song/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
