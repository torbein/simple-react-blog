import axios from "axios";

export function fetchPosts() {
    const BASE_ROUTE = "http://localhost:3000"
    return function(dispatch){
        axios.get(BASE_ROUTE + "/api/posts")
        .then((res) => {
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: res.data})
        }).catch((err) => {
                dispatch({type: "POSTS_ERROR", payload: err})
            }
        )
    }
}

export function fetchPost() {
    return {
        type: "FETCH_POST",
        payload: {
            
        }
    }
}

export function modifyPost() {
    return {
        type: "MODIFY_POST",
        payload: {
            
        }
    } 
}

export function deletePost() {
    return {
        type: "DELETE_POST",
        payload: {
            
        }
    }   
}