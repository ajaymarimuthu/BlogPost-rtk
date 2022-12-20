import {configureStore} from "@reduxjs/toolkit"
 
import postReducer from "../Features/Posts/postSlice"

export const store=configureStore({
    reducer:{

        posts:postReducer
    }
})