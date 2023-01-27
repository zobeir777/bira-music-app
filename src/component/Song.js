import React from 'react'
import { useParams } from 'react-router-dom'
const Song = () => {
    const{id}=useParams()
    return (
       <>
       <div>this is{id}</div>
           <div className='bg-secondary p-5 d-flex justify-content-center '>
             <div className="card mb-3 w-50 " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="#" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex '>
        
            <div className="card mb-3 w-50 p-5 " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="#" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        
            
            <div className=' w-100  d-flex '>
                <div className='d-flex mh-100 flex-column   w-100  justify-content-center text-center align-content-center' >
                    <div className='d-flex justify-content-center'>
                    <h2 className=''>Artist</h2>
                    <div>
                        <img src='#'></img>
                        <p>jukljknknkn</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </>
        
        
       
    
    )
}

export default Song