import React, { useState, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = () => {


  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favsong"))
    if (data) setFav(data)
  }, [])
  const handleOpen = (e) => {
    setOpen(()=>!open);
  };
  const deleteSong = (num) => {
    const filter = fav.filter((element) => {
      return element.id !== num;
    })
    
    setFav(filter)
    console.log(filter)
    localStorage.setItem('favsong', JSON.stringify(filter))
  }


  return (
    <div>
      <nav className='nav d-flex  py-4 justify-content-between ' style={{ backgroundColor: '#444' }}>
        <div className='left-nav ms-3 d-flex align-items-center'>
          <Link to={"/"}><button className='btn h-100 btn-light'>Bira music player</button></Link>
          <Link to={"/About"} className='text-decoration-none'> <h6 className='text-light ms-3 '>about</h6></Link>
        </div>
        <div className='right-nav me-3 d-flex align-items-center '>
          <span className='text-white me-2 fs-3 mb-2 '><AiFillHeart onClick={handleOpen} className=' ' />
          </span>
          <h5 className='text-white '>favorites</h5>

        </div>

      </nav>
      {open ? fav.map((item, index) => {
        console.log(item)
        return (
          <ul key={item.index} class="list-group ">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.title}</div>

              </div>
              <span class="badge bg-primary rounded-pill" onClick={() => deleteSong(item.id)}>x</span>
            </li>

          </ul>
        )
      }) : null}

    </div>
  )
}

export default Navbar