import React from "react";
import "./categorie.module.css"


function Categorie(props) {
    console.log(props)
    return (
        <div>
            {props.categories.items.map((categ, index) => {
                return (
                    <div key={index}>
                        <h1>{categ.name}</h1>
                        <img src={categ.icons[0].url}/>
                    </div>
                )
            })}

            {props.categories.next
                ? (<button onClick={() => {props.buttonNextPage(props.categories.next)}}>Next</button>)
                : (<button disabled="true">Next</button>)}
            {props.categories.previous 
                ? (<button onClick={() => {props.buttonPreviousPage(props.categories.previous)}}>Previous</button>)
                : (<button disabled="true">Previous</button>)}
        </div>
    )
}


export default Categorie;