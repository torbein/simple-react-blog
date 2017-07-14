import React from "react";
import { connect } from "react-redux";

import * as PostAction from "../actions/posts-actions.js";

@connect((store) => {
    return {
        post: store.post
    }
})
export default class Post extends React.Component {

    constructor() {
        super();
        this.fetchPost = this.fetchPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.modifyPost = this.modifyPost.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editBox = this.editBox.bind(this);
        this.state = {editMode: false, post: {title: null, body: null}};
    }

    componentWillMount(){
        this.fetchPost(this.props.match.params.id);
    }


    fetchPost(postid) {
        this.props.dispatch(PostAction.fetchPost(postid));
    }

    deletePost(postid) {
        this.props.dispatch(PostAction.deletePost(postid));
        this.props.history.goBack();
    }

    modifyPost(post) {
        this.props.dispatch(PostAction.modifyPost(post));
    }

    toggleEditMode(post) {
        console.log(this.state.editMode)
        this.setState({
            editMode: !this.state.editMode,
            post: {
                title: post.title,
                body: post.body
            }
        }) ;
    }

    handleSubmit(event, post) {
        event.preventDefault();
        this.modifyPost(post);
    }

    editBox(post) {
        if(this.state.editMode) {
            return (
            <div>
                <form onSubmit={() => this.modifyPost(post)}>
                    <div className="col-xs-12">
                        <label>
                            Title <br />
                            <input name="title" type="text" value={this.state.post.title} />
                        </label>
                    </div>
                    <div className="col-xs-12">
                        <label>
                            Content <br />
                            <textarea name="content" type="text" value={this.state.post.body} />
                        </label>
                    </div>

                    <button className="btn btn-primary btn-lg" type="submit" value="submit" >Save Post</button>
                </form>
                <button className="btn btn-default btn-lg" onClick={() => this.toggleEditMode(null)}>Cancel</button>
            </div>
        )
        }
    }

    
    render() {
        const { post } = this.props;
        let editBox = this.editBox(post)
        console.log(this.props)
        if(!this.state.editMode) {
            return(
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button className="btn btn-default btn-lg" onClick={() => this.toggleEditMode(post)}>Modify Post</button>
                    <button className="btn btn-danger btn-lg" onClick={() => this.deletePost(post._id)}>Delete Post</button>
                </div>
            )
        } else {
            return(
                {editBox}
            )
        }
    }
}
