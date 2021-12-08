// export let store = {
//         _state: {
//                 other: [{id: 1, name: "item1"},
//                         {id: 2, name: "item2"},
//                         {id: 3, name: "item3"}],
        
//                 sounds: [{id: 1, name: "track1"},
//                         {id: 2, name: "track2"},
//                         {id: 3, name: "track3"}],

//                 soundDraft: "",
        
//                 genres: [{id: 1, name: "genre1"},
//                         {id: 2, name: "genre2"},
//                         {id: 3, name: "genre3"}]
//         },
//         getState() {
//                 return this._state
//         },
//         renderMainApp() {
//                 console.log("")
//         },
//         subs(observed) {
//                 this.renderMainApp = observed
//         },
//         dispatch(action) {
//                 this._state = createReduser(this._state, action)
//                 this.renderMainApp()
//         }
// }


// export default store;