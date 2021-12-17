import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from  "../../api/api";


function Album(props) {
    let {id} = useParams()

    const [count, setCount] = useState(null)

    useEffect(async () => {
        setCount(await request(`https://api.spotify.com/v1/albums/${id}`))
    }, [])

    console.log(count)

    if (!count) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1>{count.name}</h1>
            <img src={count.images[1].url}/>
        </div>
    )
}


export default Album;