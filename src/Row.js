import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../src/axios'
import './Row.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ tittle, fetchUrl, islargeRow }) {

    const [movies, setmovies] = useState([]);

    useEffect(() => {

        async function fetchdata() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl])

    return (
        <div className="row">

            <h2>{tittle}</h2>

            <div className="row_posters">

                {movies.map(items => {
                    return (
                        <img
                            key={items.id}
                            className={`row_poster ${islargeRow && "row_posterlarger"}`}
                            src={`${baseUrl}${islargeRow ? items.poster_path : items.backdrop_path}`}
                            alt={items.name}
                        />
                    )
                })}

            </div>

        </div>
    )
}

export default Row
