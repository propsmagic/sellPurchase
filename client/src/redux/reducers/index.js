
import {combineReducers} from "redux"
import { allUserPostsReducer } from "./userPostReducer";


const rootReducer = combineReducers(
    {
        allPosts:allUserPostsReducer
    }
)

export default rootReducer;