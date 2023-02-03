import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
const Song = () => {
    const { id } = useParams();
    const item = useSelector((store) => store);
    const [song,setSong]=useState("")
    // console.log(item)

    return (
       <>
            

            


                    <div className='bg-secondary p-5  d-flex justify-content-center '>
                        <div className="card mb-3 w-50 " >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item[0].album.cover} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body">
                                        <h5 className="card-title ">{item[0].title_short}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <audio  src={item[0].preview} controls> </audio>
                                        <a href={item[0].link}>Listen To Full Song</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex '>

                        <div className="card mb-3 w-50 p-5 " >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item[0].album.cover} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item[0].title_short}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=' w-100  d-flex '>
                            <div className='d-flex mh-100 flex-column   w-100  justify-content-center text-center align-content-center' >
                                <div className='d-flex justify-content-center'>
                                    <h2 className=''>Artist</h2>
                                    <div>
                                        <img src={item[0].artist.picture_medium} ></img>
                                        <Link to={`/about/${item[0].id}`}><p>{item[0].artist.name}</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>




                )
}

                export default Song