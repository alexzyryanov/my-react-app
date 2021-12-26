import React, { useEffect, useState } from "react";
import s from "./album.module.css"
import { useParams } from "react-router-dom";
import { request } from  "../../api/api";
import Preloader from "../preloader/preloader";


function Album(props) {
    let {id} = useParams()

    const [count, setCount] = useState(null)

    useEffect(async () => {
        setCount(await request(`https://api.spotify.com/v1/albums/${id}`))
    }, [])

    console.log(count)

    if (!count) {
        return (
            <Preloader/>
        )
    }

    return (
        <>
        <div class={s.album_page}>
            <div class={s.about}>
                <img src={count.images[1].url} alt="cover"/>
                <div class={s.info}>
                    <div class={s.type}>
                        <p>{count.album_type}</p>
                    </div>
                    <div class={s.name}>
                        <a href={count.external_urls.spotify} target="_blank">{count.name}</a>
                    </div>
                    <div class={s.artists}>
                        {count.artists.map((artist) => {
                            return(
                                <a href={artist.external_urls.spotify} target="_blank">{artist.name}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div class={s.tracks}>
                {count.tracks.items.map((track) => {
                    return(
                        <div class={s.track}>
                            <audio src={track.preview_url} controls></audio>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


export default Album;