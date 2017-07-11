import React from "react";

import Article from "../components/Posts/Article";

export default class Featured extends React.Component {

    constructor() {
        super();
    }

    render() {
        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet another aritcle",
            "The best article",
        ].map((title, i) => <Article key={i} title={title}/>);


        return(
            <div>
                <h1>Featured</h1>
                <div className="row">
                        {Articles}
                </div>
            </div>
        );
    }
}