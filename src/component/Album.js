import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
const Album = () => {
    const { id } = useParams();
     const item = useSelector((store) => store);
    //  console.log(item[0].album.tracklist)
    console.log(item[0].album.tracklist)
    // useEffect(()=>{
    //     fetch('https://api.deezer.com/album/1932877117/tracks')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
       
    //  },[id])
  return (
    <div>Album</div>
  )
}

export default Album