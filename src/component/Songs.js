import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useDispatch } from "react-redux";


import '../App.css';

const Songs = () => {

  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("eminem")
  const [items, setItems] = useState([])
  const [show, setShow] = useState(false);
  const autocamplit = (e) => {
    setShow(e => setShow(!e))
    setSearch(e)
  }


  useEffect(() => {
    axios(
      {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete',
        params: { text: `${search}` },
        headers: {
          'X-RapidAPI-Key': 'cfaea4ffc1msh0428988f3a53f6fp16e800jsnd3ee95260de1',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      }
    ).then(function (response) {
      setItems(response.data);
      console.log(response.data);
    }).catch(function (error) {
      console.log(error)
    });

  }, [search])

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: { q: `${search}` },
      headers: {
        'X-RapidAPI-Key': 'cfaea4ffc1msh0428988f3a53f6fp16e800jsnd3ee95260de1',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    }).then(function (response) {
      setSongs(response.data.data);
      console.log(response.data.data);
    }).catch(function (error) {
      console.log(error)
    });


  }, [search])
  return (
    <div className=''>
      <Navbar />
      <div className="d-flex justify-content-center  mb-5">
        <div className='w-75   '>
          <form className='form opacity-75  p-3 d-flex  mt-5 bg-secondary   w-75 text-black fw-bold  rounded-pill '>
            <input type="text" onChange={(e) => autocamplit((e.target.value))}
              className="form-control bg-secondary fw-bold border-0 "
              placeholder="Search Name Of Artist , track" />

            <BiSearch className='fs-3 me-3' />

          </form>
          {
            show ? items.map((item, index) => {
             
              return (
                <div className='list-group-item' onClick={() => setSearch(item)} key={item[index]}>{item}</div>
              )
            }) : null
          }

        </div>
      </div>
      <div className='d-flex   flex-wrap ms-4'>
        {
          songs && songs.map((item) => {
         
            return (
              <div key={item.id} className='p-2' onClick={() => dispatch({ type: "SHOW", payload: item })}>
                <Link to={`/album/${item.id}`}><img className='' src={item.album.cover_medium}></img></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Songs