import {createSlice, nanoid} from "@reduxjs/toolkit"

import {sub} from 'date-fns';

const initialState=[
    {id:'1',
    title:"Learning Redux toolkit",
    content:"Good Things",
    date: sub(new Date(), {minutes:10}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
    },

    {id:'2',title:"Slices....",content:"Slice in toolkit",
    date: sub(new Date(), {minutes:5}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
    }
]


const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

        postAdded:{
            reducer(state,action){
            state.push(action.payload)
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        

    }
})

export const selectAllPosts=(state)=>state.posts

export const {postAdded} =postSlice.actions

export default postSlice.reducer;