import axios from "axios";

const BASE_ROUTE = "http://localhost:3000"

export function fetchPosts() {
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

export function fetchPost(post) {
    const BASE_ROUTE = "http://localhost:3000"
    return function(dispatch){
        axios.get(BASE_ROUTE + "/api/posts/" + post._id)
        .then((res) => {
            dispatch({type: "FETCH_POSTS_SUCCESS", payload: res.data})
        }).catch((err) => {
            dispatch({type: "POSTS_ERROR", payload: err})
            }
        )
    }
}

export function createPost(post) {
    return function(dispatch){
        axios.post(BASE_ROUTE + "/api/posts",
        {
            title: post.title,
            body: post.body,
            author: "Victor"
        })
        .then((res) => {
            dispatch({type: "CREATE_POST_SUCCESS"})
        }).catch((err) => {
            dispatch({type: "POSTS_ERROR", payload: err})
            }
        )
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