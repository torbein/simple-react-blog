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

export function fetchPost(postid) {
    const BASE_ROUTE = "http://localhost:3000"
    return function(dispatch){
        axios.get(BASE_ROUTE + "/api/posts/" + postid)
        .then((res) => {
            console.log("data")
            console.log(res.data)
            dispatch({type: "FETCH_POST_SUCCESS", payload: res.data})
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

export function modifyPost(post) {
    const BASE_ROUTE = "http://localhost:3000"
    return function(dispatch){
        axios.put(BASE_ROUTE + "/api/posts/" + post._id, {
            title: post.title,
            body: post.body,
            author: "Victor"
        })
        .then((res) => {
            dispatch({type: "MODIFY_POST_SUCCESS", payload: res.data})
        }).catch((err) => {
            dispatch({type: "POSTS_ERROR", payload: err})
            }
        )
    }
}

export function deletePost(postid) {
    const BASE_ROUTE = "http://localhost:3000"
    return function(dispatch){
        axios.delete(BASE_ROUTE + "/api/posts/" + postid)
        .then((res) => {
            dispatch({type: "DELETE_POST_SUCCESS", payload: res.data})
        }).catch((err) => {
            dispatch({type: "POSTS_ERROR", payload: err})
            }
        )
    }
}