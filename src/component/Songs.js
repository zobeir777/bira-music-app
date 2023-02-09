import React, { Children, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useDispatch } from "react-redux";


import '../App.css';

const Songs = () => {

  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("ava")
  const [items, setItems] = useState([])
  const [result,setResult]= useState('')
  const [show, setShow] = useState(false);
  console.log(search)
  const autocamplit = (searchtext) => {
    axios(
      {
        method: 'GET',
        url: 'http://localhost:3000/name.json',
        params: { text: `${searchtext}` },
   
      }
    ).then(function (response) {
      setItems(response.data);
   
    }).catch(function (error) {
      
      console.log(error)
    })

    // setShow(e => setShow(!e))
   
    let matches = items.filter(item=>{
      const regex = new RegExp(`^${searchtext}`,'gi');
      return item.match(regex)

    })
    console.log(matches)
    const rmatch = matches;
    // if(){}

  
    if(searchtext.length > 2){
      setResult(rmatch.slice(0,4))
    }else{
      setResult([])
    }
   


    
  }
  const go =(e)=>{
    setSearch(e)
    setResult([])
  
  }
 


 

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
      console.log(response.data.data)
    }).catch(function (error) {
      console.log(error)
    });

  }, [search])
  const getInput=()=> {
    var input = document.getElementById("input").value;
    setSearch(input);
}
  return (
    <div className=''>
      <Navbar />
      <div className="d-flex justify-content-center  mb-5">
        <div className='w-75   '>
          <form className='form opacity-75  p-3 d-flex  mt-5 bg-secondary   w-75 text-black fw-bold  rounded-pill '>
            <input type="text" id='input' onChange={(e) => autocamplit(e.target.value)}
              className="form-control bg-secondary fw-bold border-0 "
              placeholder="Search Name Of Artist , track" />

            <BiSearch className='fs-3 me-3' style={{cursor:'pointer'}} onClick={getInput} />

          </form>
          {
              result && result.map((item) => {
              console.log(result)
             
              return (
                <div className='list-group-item' style={{cursor:'pointer'}} onClick={(e)=>go(item)}  key={item}>{item}</div>
              )
            })
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