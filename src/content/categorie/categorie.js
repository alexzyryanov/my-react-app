import React from "react";
import { Link } from "react-router-dom";
import s from "./categorie.module.css"


function Categorie(props) {
    console.log(props)
    return (
        <>
        <div className={s.items}>
            {props.categories.items.map((categ, index) => {
                return (
                    <Link to={`/playlists/${categ.id}`}>
                        <div key={index} className={s.item}>
                            <img src={categ.icons[0].url} alt="cover"/>
                            <div className={s.name}>
                                <h1>{categ.name}</h1>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className={s.paginator}>
            {props.categories.previous
                ? (<button onClick={() => {props.buttonPreviousPage(props.categories.previous)}}>Previous</button>)
                : (<button disabled="true">Previous</button>)}
            {props.categories.next
                ? (<button onClick={() => {props.buttonNextPage(props.categories.next)}}>Next</button>)
                : (<button disabled="true">Next</button>)}
        </div>
        </>
    )
}


export default Categorie;