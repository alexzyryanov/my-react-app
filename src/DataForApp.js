import {renderEntireTree} from "./index"


let data = {
        other: [{id: 1, name: "item1"},
                {id: 2, name: "item2"},
                {id: 3, name: "item3"}],

        sounds: [{id: 1, name: "track1"},
                {id: 2, name: "track2"},
                {id: 3, name: "track3"}],

        genres: [{id: 1, name: "genre1"},
                {id: 2, name: "genre2"},
                {id: 3, name: "genre3"}],
        updateText: "sd"
}


export let updateText = (message) => {
        console.log("save")
        data.updateText = message
        renderEntireTree(data)
}


export let printMessage = (mess) => {
        data.sounds.push({id: 3, name: "track3"})
        renderEntireTree(data)
}


export default data