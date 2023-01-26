import React from 'react'
import Navbar from "./Navbar"
const AboutAPP = () => {
  return (
    <>
    <Navbar/>
    <div className='container  w-75'>
      <div className='avatar d-flex justify-content-center mt-4 mb-4 '>
        <img src="/images/zobeir.jpg" className='w-25 h25 rounded-circle '/>
        <div className='me d-flex align-items-center flex-column justify-content-center ms-3'>
          <h3>Zobeir Faraji</h3>
          <h5 className='opacity-75'>front end developer</h5>
        </div>
      </div>
      <div className='info d-flex'>
        <div className='w-50 '>
          <p className='w-100  mt-5 lh-lg p-3'>my name is zobeir farajy I from kuristan i love programing and coding .
            in my free time watch football and sometimes play football weith my friends .
            another things  that i realy so love it study about  Psycho-Cybernetics .

          </p>
        </div>
        <div className='w-50 text-center'>
          <img className=' h-25 text-align-center' src='/images/bir.jpg'/>
          <p>bira is a academy for design and develop website </p>
        </div>
      </div>
    </div>
    
    </>
    

  )
}

export default AboutAPP
