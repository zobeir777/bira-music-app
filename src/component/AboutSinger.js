import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import axios from "axios";
import NotFound from './NotFound';
import Navbar from './Navbar';
import { Link, useParams } from "react-router-dom";
const AboutSinger = () => {
    const { id } = useParams();
    const item = JSON.parse(localStorage.getItem("song"))
    const [images, setImages] = useState([])
    const [album, setAlbum] = useState([])
    useEffect(() => {
        axios(
            {
                method: 'GET',
                url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
                params: { q: `${item.artist.name}`, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
                headers: {
                    'X-RapidAPI-Key': 'cfaea4ffc1msh0428988f3a53f6fp16e800jsnd3ee95260de1',
                    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                }
            }
        ).then(function (response) {
            setImages(response.data.value);
            console.log(response.data.value);
        }).catch(function (error) {
            console.log(error)
        });

    }, [])


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
        <Navbar />
           {
         (id == item.id) ? (
            <>
                <div className='d-flex bg-secondary flex-column'>
                    <h3 className='p-3 text-center mt-4'>pictures of the artist</h3>

                    <div className='d-flex'>
                        {

                            images && images.map((image) => {
                                // console.log(image)
                                return (
                                    <div key={image.id} className='p-2 w-100' >
                                        <img className=' d-flex  over-flow-hiden w-100 h-75' alt='no image' src={image.url}></img>
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className="d-flex justify-content-center">
                        <span style={{
                            marginTop: '20px',
                            textAlign: "center",

                            top: "17px",
                            // left: '250px',
                            border: "1px solid black",
                            borderRadius: "20px"
                        }} className='text-center bg-white p-2 fs-5 w-25 position-relative'>{item.artist.name}</span>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className='col-6 p-3'>
                        <h3 className=' text-center'>about singer</h3>
                        <p className='px-3  ms-2'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className='col-6'>
                        <h2>singer albums</h2>
                        <div>
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
                </div>
            </>

        ) : <NotFound />
        }
        </>
    )
        
}

export default AboutSinger
