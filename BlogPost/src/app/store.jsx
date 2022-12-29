import {configureStore} from "@reduxjs/toolkit"
 
import postReducer from "../Features/Posts/postSlice"
import usersReducer from "../Features/Users/usersSlice"


export const store=configureStore({
    reducer:{

        posts:postReducer,
        user:usersReducer
    }
})