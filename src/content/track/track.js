import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from  "../../api/api";
import s from "./track.module.css"
import Preloader from "../preloader/preloader";


function Track(props) {
    let {id} = useParams()

    const [count, setCount] = useState(null)

    useEffect(async () => {
        setCount(await request(`https://api.spotify.com/v1/playlists/${id}`))
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
                <img src={count.images[0].url} alt="cover"/>
                <div class={s.info}>
                    <div class={s.type}>
                        <p>{count.type}</p>
                    </div>
                    <div class={s.name}>
                        <a href={count.external_urls.spotify} target="_blank">{count.name}</a>
                    </div>
                    <div class={s.total}>
                        <p>{count.tracks.total} треков</p>
                    </div>
                </div>
            </div>
            <div class={s.tracks}>
                {count.tracks.items.map((track) => {
                    return(
                        <div class={s.track}>
                            <audio src={track.track.preview_url} controls></audio>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


export default Track;