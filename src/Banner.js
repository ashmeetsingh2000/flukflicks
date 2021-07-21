import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchmovie() {

            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchmovie();
    }, []);
    console.log({ movie });
    return (
        <header className="Banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/origiinal/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="Banner_contents">
                <h1>{movie?.tittle || movie?.name || movie?.original_name}</h1>
            </div>
        </header>
    )
}

export default Banner;
