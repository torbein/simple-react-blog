import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Posts from "../components/Posts";
import Article from "../components/Article";


const createPosts = (posts) => {
    return posts.map((title, i) =>
        <Article key={i} title={title}/>
    );
}
    
const mapStateToProps = state => {
    return {
        posts: createPosts(state.posts)
    }
}

export default createPosts;