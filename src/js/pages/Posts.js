import React from "react";
import { connect } from "react-redux";

import * as PostAction from "../actions/posts-actions.js";

@connect((store) => {
    return {
        posts: store.posts
    }
})
export default class Posts extends React.Component {

    constructor() {
        super();
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentWillMount(){
        this.fetchPosts();
    }

    fetchPosts() {
        this.props.dispatch(PostAction.fetchPosts());
    }

    
    render() {
        const { posts } = this.props;

        const mappedPosts = posts.map(post => <li>{post.title}</li>)

        return(
            <div>
                <h1>Posts</h1>
                <ul>{mappedPosts}</ul>
            </div>
        );
    }
}
