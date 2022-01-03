import React, { useEffect, useState } from "react";
import s from "./playlist.module.css";
import { Link, useParams } from "react-router-dom";
import { request } from  "../../api/api";
import Preloader from "../preloader/preloader";


function Playlist(props) {
    let {id} = useParams()
    
    const [count, setCount] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setCount(await request(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=RU`))
        }
        fetchData()
    }, [id])

    if (!count) {
        return (
            <Preloader/>
        )
    }

    return (
        <>
        <div className={s.items}>
            {count.playlists.items.map((data, index) => {
                return (
                    <Link key={index} to={`/tracks/${data.id}`}>
                        <div className={s.item}>
                            <div className={s.cover}>
                                <img src={data.images[0].url} alt="cover"/>
                            </div>
                            <div className={s.name}>
                                <h1>{data.name}</h1>
                            </div>
                            <div className={s.info}>
                                <p>{data.tracks.total} треков</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
        </>
    )
}


export default Playlist;