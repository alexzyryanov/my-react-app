import React from "react";
import s from "./release.module.css"
import { Link } from "react-router-dom";


function Release(props) {
    console.log(props)
    return (
        <>
        <div className={s.items}>
            {props.releases.albums.items.map((album, index) => {
                return (
                    <div key={index} className={s.item}>
                        <div className={s.cover}>
                            <Link to={`/albums/${album.id}`}>
                                <img src={album.images[1].url} alt="img"/>
                            </Link>
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
                )
            })}
        </div>
        <div className={s.paginator}>
            {props.releases.albums.previous 
                ? (<button onClick={() => {props.buttonPreviousPage(props.releases.albums.previous)}}>Previous</button>)
                : (<button disabled="true">Previous</button>)}
            {props.releases.albums.next
                ? (<button onClick={() => {props.buttonNextPage(props.releases.albums.next)}}>Next</button>)
                : (<button disabled="true">Next</button>)}
        </div>
        </>
    )
}


export default Release;