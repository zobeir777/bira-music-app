import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import '../App.css';

const Songs = () => {
  const Reducer = useSelector((store) => store);
  const dispatch = useDispatch();
  const[songs,setSongs]=useState([]);
  const[search,setSearch]=useState("ava")
    const[items,setItems]=useState([])

  console.log(search)

    useEffect(()=>{
        axios(
            {
                method: 'GET',
                url: 'https://web-search-autocomplete.p.rapidapi.com/autocomplete',
                params: {query: `${search}`, language: 'en', region: 'us'},
                headers: {
                    'X-RapidAPI-Key': 'cfaea4ffc1msh0428988f3a53f6fp16e800jsnd3ee95260de1',
                    'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
                }
            }
        ).then(function (response) {
            setItems(response.data.data);
            console.log(response.data.data);
        }).catch(function (error) {
            console.log(error)
        });

    },[search])

  useEffect(()=>{
   axios({
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: `${search}`},
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


},[search])
    return (
    <div className=''>
      <Navbar/>
        <div className="d-flex justify-content-center mb-5">
            <div className='w-75   '>
                <form className='form opacity-75  p-3 d-flex  mt-5 bg-secondary   w-75 text-black fw-bold  rounded-pill '>
                    <input type="text" onChange={(e) => setSearch((e.target.value))}
                           className="form-control bg-secondary fw-bold border-0 "
                           placeholder="Search Name Of Artist , track"/>

                    <BiSearch className='fs-3 me-3'/>

                </form>
                {
                    items && items.map((item,index)=>{
                        console.log(item)
                        return(
                            <div onClick={()=>setSearch(item.query)} key={item[index]}>{item.query}</div>
                        )
                    })
                }

            </div>
        </div>
        <div className='d-flex   flex-wrap ms-4'>
      {
        songs && songs.map((item)=>{
          // console.log(item)
          return(
            <div key={item.id} className='p-2' onClick={() => dispatch({ type: "SHOW", payload:item})}>
              <Link to= {`/album/${item.id}`}><img className='' src={item.album.cover_medium}></img></Link>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Songs