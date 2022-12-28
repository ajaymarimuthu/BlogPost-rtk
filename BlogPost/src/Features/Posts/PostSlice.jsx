import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState=[
    // {id:'1',title:"Learning Redux toolkit",content:"Good Things"},
    // {id:'2',title:"Slices....",content:"Slice in toolkit"},
]


const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

        postAdded:{
            reducer(state,action){
            state.push(action.payload)
            },
            prepare(title,content){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }

    }
})

export const selectAllPosts=(state)=>state.posts

export const {postAdded} =postSlice.actions

export default postSlice.reducer;