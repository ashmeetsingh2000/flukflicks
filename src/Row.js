import React,{ useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Row({ tittle,fetchUrl }) {

    const [movies, setmovies] = useState([]);

    useEffect(() => {

        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            console.log(request.data);
            return request;
        }
        fetchdata();
    }, [])

    return (
        <div>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Row
