import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import NotFound from './NotFound';
const Album = () => {
  const { id } = useParams();
  const item = JSON.parse(localStorage.getItem("song"))
  console.log(item)
  const [album, setAlbum] = useState([])
  useEffect(() => {
    axios(
      {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
        headers: {
          'X-RapidAPI-Key': 'cfaea4ffc1msh0428988f3a53f6fp16e800jsnd3ee95260de1',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      }

    ).then(function (response) {
      setAlbum(response.data.tracks.data);
      console.log(response.data);
    }).catch(function (error) {
      console.log(error)
    });

  }, [id])
  console.log(album)

  return (
    <>
        {
          (id==item.id)?(
            <>
            <div className='container d-flex w-100 align-content-center ms-5'>
      <Link className='d-flex align-content-center' to={`/song/${item.id}`}>
      <div className="d-flex justify-content-center align-content-center" >
        <div className=" mt-5 align-content-center w-75 pt-5  ms-3">
          <h5 className="text-center text-decoration-none text-dark ">{item.title_short}</h5>
          <img src={item.album.cover_big} className="img-fluid p-2 rounded-start " alt="..." />
        </div>
      </div>
      </Link>
      
     <div className='mt-5 h-auto py-5 '>
         {
             album && album.map((itemm) => {
                 console.log(itemm)
                 return (
                     <Link to={`/song/${itemm.id}`}>
                         <div className=" d-flex mb-3 w-75  p-1 " key={itemm.id}>
                             <img className='w-25 h-25 me-5 ' src={itemm.album.cover_big}></img>
                             <h4 className='text-decoration-none text-dark'>{itemm.title}</h4>
                         </div>
                     </Link>
                 )

             })
         }
     </div>
    </div>
            </>
          ):<NotFound/>
        }
    </>
  )
}

export default Album
