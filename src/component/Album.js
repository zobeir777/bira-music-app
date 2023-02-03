import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
const Album = () => {
  const { id } = useParams();
  const item = useSelector((store) => store);
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
    <div>
      <Link to={`/song/${item[0].id}`}>
      <div className="container " >
        <div className="justify-content-center">
          <h5 className="">{item[0].title_short}</h5>
          <img src={item[0].album.cover_big} className="img-fluid w-25 rounded-start " alt="..." />
        </div>
      </div>
      </Link>
      
      {
        album && album.map((itemm) => {
          console.log(itemm)
          return (
            <Link to={`/song/${item[0].id}`}>
              <div className="card mb-3 w-50 p-5 " key={itemm.id}>
                <img className='w-50' src={itemm.album.cover_big}></img>
                <h4></h4>
              </div>
            </Link>
          )

        })
      }
    </div>
  )
}

export default Album
