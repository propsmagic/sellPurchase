import { ActionTypes } from "../constants/action-types";


const initialState = {
    "posts" : []
    }

// function allPosts(){
//     const dispatch = useDispatch();
//     const allPostsUrl = "http://localhost:3000/posts"
//     const userPosts = async(allPostsUrl)=>{
//         const response = await(axios.get(allPostsUrl)
//         .then(res=>console.log(res)) 
//         .catch(err=> console.log(err))
//         )
//         dispatch(getAllUserPosts)
//     }

//     useEffect(()=>{
//         userPosts()
//     },[])
// }
// allPosts()

export const allUserPostsReducer = (state = initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_ALL_USER_POSTS:
            return{...state, posts: action.payload}
        
            default:
                return state
    }
}