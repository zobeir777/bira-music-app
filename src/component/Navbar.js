import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='nav d-flex  py-4 justify-content-between 'style={{backgroundColor:'#444'}}>
        <div className='left-nav ms-3 d-flex align-items-center'>
         <Link to={"/Songs"}><button className='btn h-100 btn-light'>Bira music player</button></Link>
         <Link to={"/"} className='text-decoration-none'> <h6 className='text-light ms-3 '>about</h6></Link>
        </div>
        <div className='right-nav me-3 d-flex align-items-center '>
          <span className='text-white me-2 fs-3 mb-2'><AiFillHeart/></span>
          <h5 className='text-white '>favorites</h5>
        </div>
      </nav>
    </div>
  )
}

export default Navbar