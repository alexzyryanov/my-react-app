import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from  "../../api/api";
import Preloader from "../preloader/preloader";
import s from "./overview.module.css"


function Overview(props) {
    let {id} = useParams()

    const [count, setCount] = useState(null)

    useEffect(async () => {
        setCount(await request(`https://api.spotify.com/v1/recommendations?seed_genres=${id}`))
    }, [])

    console.log(count)

    if (!count) {
        return (
            <Preloader/>
        )
    }

    return (
        <>
        <div class={s.items}>
            {count.tracks.map(track => {
                return (
                    <a href={track.external_urls.spotify} target="_blank">
                        <div class={s.item}>
                            <img src={track.album.images[2].url} alt="cover"/>
                            <div class={s.name}>
                                <h1>{track.name}</h1>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
        </>
    )
}


export default Overview;