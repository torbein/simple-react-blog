const initialState = {
    posts: [],
    post: {
        title: null,
        bodu: null,
        author: null,
        created_at: null,
        modifed_at: null
    },
    fetching: false,
    fetched: false,
    error: null,
};

export default function PostsReducer(state=initialState, action) {

    switch (action.type) {

        case "FETCH_POSTS": {
            return { ...state, fetching: true }
        }

        case "MODIFY_POST": {
            return { ...state, fetching: true }
        }

        case "FETCH_POST": {
            return { ...state, fetching: true, fetched: true, post: action.payload }
        }

        case "DELETE_POST": {
            return { ...state, fetching: true }
        }

        case "POSTS_ERROR": {
            return { ...state, fetching: false, error: action.payload }
        }

        case "FETCH_POSTS_SUCCESS": {
            return { ...state, fetching: false, fetched: true, posts: action.payload }
        }

        default:
            return state;
    }
};