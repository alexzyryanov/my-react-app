let initialState = {
    genres: [{id: 1, name: "genre1"},
            {id: 2, name: "genre2"},
            {id: 3, name: "genre3"}]
}


const genreReduser = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default genreReduser;