import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import NotFound from './NotFound';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import Navbar from './Navbar';
const Song = () => {
    const { id } = useParams();
    // const item = useSelector((store) => store);
    const data = JSON.parse(localStorage.getItem("song"))
    const [song, setSong] = useState([data])
    const[heart,setHeart] =useState("")
    console.log(heart)
  
    const [favsongs, setFavsongs] = useState([])
  
    // const route=()=>{
    //     if(id!==song.id){
    //        return navigate("*")
    //     }
    //     route()
    // }
   
  

    let handleSubmit = () => {
        // const favsongs = JSON.parse(localStorage.getItem("favsong"))
        let tempcart = favsongs.filter((item) => item.id === song[0].id);
        console.log(tempcart);
        if (tempcart.length < 1) {
            setFavsongs([...favsongs, song[0]]);
            localStorage.setItem('favsong', JSON.stringify([...favsongs, song[0]]))
            setHeart(true)
          

        } else {
            // alert(" داریمش ");
            // return
            const filter = favsongs.filter((element) => {
                return element.id !== song[0].id;
                
            })
            localStorage.setItem('favsong', JSON.stringify(filter))
            // localStorage.setItem('heart', JSON.stringify(false))
            setHeart(false)
        }
        
    }

    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favsong"))
        if (data) setFavsongs(data);
        heartFill()
    }, [heart])
    
    const heartFill=(e)=>{
        //  setHeart(()=>!heart)
        const dataH = JSON.parse(localStorage.getItem("favsong"))
    let heartItem = favsongs.filter((item) => item.id === song[0].id);
    if(heartItem.length<1){
        return setHeart(false)
    }else{
        return setHeart(true)
    }
    
}







    return (
        <>
        <Navbar />
       
           {
            (id==song[0].id)?(
                <>
                  <div className='bg-secondary p-5 h-50 d-flex justify-content-center '>
                <div className="card mb-3 w-50 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={song[0].album.cover} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title ">{song[0].title_short}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <audio src={song[0].preview} controls> </audio>
                                <span className=' me-2 fs-3 mb-2' >{heart?<AiFillHeart className='text-danger 'onClick={handleSubmit}/>:<AiOutlineHeart className='text-danger ' onClick={handleSubmit} />}
                                </span>
                                <a href={song[0].link}>Listen To Full Song</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex mt-3'>

                <div className="card  w-50 p-2 " >
                    <div className="row h-25">
                        <div className="col-md-4">
                            <img src={song[0].album.cover} className=" rounded-start w-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{song[0].title_short}</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' w-100  d-flex mt-2'>
                    <div className='d-flex mh-100 flex-column   w-100  justify-content-center text-center align-content-center' >
                        <div className=' justify-content-center '>
                            <h2 className='text-center mb-3 me-5'>Artist</h2>
                            <div className='d-flex justify-content-center'>
                                <img className='w-25' src={song[0].artist.picture_medium} ></img>
                                <div className='flex-direction: column p-4 my-1'>
                                    <h3>{song[0].title_short}</h3>
                                    <Link to={`/about/${song[0].id}`}><h5 className='mt-5'>{song[0].artist.name}</h5></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
            ):<NotFound/>
           }           
        </>




    )
}

export default Song