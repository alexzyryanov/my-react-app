import React from "react";


function Release(props) {
    console.log(props)
    return (
        <div>
            {props.releases.albums.items.map((rel, index) => {
                return (
                    <div key={index}>
                        <h1>{rel.name}</h1>
                        <img src={rel.images[1].url}/>
                    </div>
                )
            })}

            {props.releases.albums.next
                ? (<button onClick={() => {props.buttonNextPage(props.releases.albums.next)}}>Next</button>)
                : (<button disabled="true">Next</button>)}
            {props.releases.albums.previous 
                ? (<button onClick={() => {props.buttonPreviousPage(props.releases.albums.previous)}}>Previous</button>)
                : (<button disabled="true">Previous</button>)}
        </div>
    )
}


export default Release;