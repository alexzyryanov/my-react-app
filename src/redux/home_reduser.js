let initialState = {
    other: [{id: 1, name: "item1"},
            {id: 2, name: "item2"},
            {id: 3, name: "item3"}]
}


const homeReduser = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default homeReduser;