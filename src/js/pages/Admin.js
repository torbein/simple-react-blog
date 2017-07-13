import React from "react";
import CreatePost from "../components/admin/Createpost";
import Settings from "../components/admin/Adminsettings";

export default class Admin extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>Admin</h1>
                <div className="row">
                        <CreatePost />
                        <Settings />
                </div>
            </div>
        );
    }
}