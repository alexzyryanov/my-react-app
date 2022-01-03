import React from "react";
import s from "./release.module.css"
import { Link } from "react-router-dom";


function Release(props) {
    return (
        <>
        <div className={s.items}>
            {props.releases.albums.items.map((album, index) => {
                return (
                    <Link key={index} to={`/albums/${album.id}`}>
                        <div className={s.item}>
                            <div className={s.cover}>
                                <img src={album.images[1].url} alt="img"/>
                            </div>

                            <div className={s.name}>
                                <h1>{album.name}</h1>
                            </div>

                            <div className={s.artists}>
                                <p>
                                    {album.artists.map((artist) => {
                                        return(
                                            artist.name + " "
                                        )
                                    })}
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className={s.paginator}>
            {props.releases.albums.previous 
                ? (<button onClick={() => {props.buttonPreviousPage(props.releases.albums.previous)}}>Previous</button>)
                : (<button disabled={true}>Previous</button>)}
            {props.releases.albums.next
                ? (<button onClick={() => {props.buttonNextPage(props.releases.albums.next)}}>Next</button>)
                : (<button disabled={true}>Next</button>)}
        </div>
        </>
    )
}


export default Release;