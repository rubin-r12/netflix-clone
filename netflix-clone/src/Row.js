import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs on specific conditions/variable
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        //unless there is a dependency for eg: [movies], so everytime "movies" variable is updated, its gonna run this portion
        async function fetchData() {
            // await tells to wait for the promise
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, []);


    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    )
}

export default Row


