import React from "react";
import { connect } from "react-redux";

import * as PostAction from "../../actions/posts-actions.js";


@connect((store) => {
    return {
        post: store.post
    }
})
export default class Createpost extends React.Component {


    constructor() {
        super();

        this.state = {
            post: {
                title: "",
                body: "",
                author: "Victor"
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({post: {
            [name]: value
        }});
        console.log(this.state.post)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.createPost(this.state.post);
    }

    createPost(post) {
        this.props.dispatch(PostAction.createPost(post));
    }

    render() {
        return(
            <div className="row">
                <h1>Wrtie a blog post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-xs-12">
                        <label>
                            Title <br />
                            <input name="title" type="text" value={this.state.post.title} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="col-xs-12">
                        <label>
                            Content <br />
                            <textarea name="body" type="text" value={this.state.post.body} onChange={this.handleChange} />
                        </label>
                    </div>

                    <button className="btn btn-default btn-lg" type="submit" value="submit" >Submit Post</button>
                </form>
            </div>
        );
    }
}