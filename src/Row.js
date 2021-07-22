import React, { useState } from 'react'
import { useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../src/axios'
import './Row.css'
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ tittle, fetchUrl, islargeRow }) {

    const [movies, setmovies] = useState([]);
    const [TrailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchdata() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: { autoplay: 1 }
    };

    const handelClick = (items) => {
        if (TrailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(items?.title || items?.name || items?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">

            <h2>{tittle}</h2>

            <div className="row_posters">

                {movies.map((items) => {
                    return (
                        <img
                            key={items.id}
                            onClick={() => handelClick(items)}
                            className={`row_poster ${islargeRow && "row_posterlarger"}`}
                            src={`${baseUrl}${islargeRow ? items.poster_path : items.backdrop_path}`}
                            alt={items.name}
                        />
                    )
                })}

            </div>
            {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
