import axios from '../src/axios'
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

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="Banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center"
            }}
        >
            <div className="Banner_contents">
                <h1 className="Banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div>
                    <button className="Banner_Buttons">Play</button>
                    <button className="Banner_Buttons">My list</button>
                </div>
                <h1 className="Banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_fadebottom">

            </div>

        </header>
    )
}

export default Banner;
