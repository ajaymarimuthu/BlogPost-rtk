import {createSlice} from "@reduxjs/toolkit"


const initialState=[
    {id:'1',title:"Learning Redux toolkit",content:"Good Things"},
    {id:'2',title:"Slices....",content:"Slice in toolkit"},
]


const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

        postAdded(state,action){
            state.push(action.payload)
        }

    }
})

export const selectAllPosts=(state)=>state.posts

export const {postAdded} =postSlice.actions

export default postSlice.reducer;