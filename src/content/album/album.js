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
            {count.artists.map((art) => {
                return(
                    <div>
                        <p>{art.name}</p>
                        <p>{art.href}</p>
                        <p>{art.id}</p>
                        <p>{art.external_urls.spotify}</p>
                    </div>
                )
            })}
            <p>{count.external_urls.spotify}</p>
            <img src={count.images[1].url}/>
            {count.tracks.items.map((tr) => {
                return(
                    <audio src={tr.preview_url} controls></audio>
                )
            })}
        </div>
    )
}


export default Album;