import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {

    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        console.log(collapsed)
        this.setState({collapsed});
    }

    render() {
        const featuredClass = location.pathname === "/" ? "active" : "";
        const postsClass = location.pathname.match(/^\/posts/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const adminClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = this.state.collapsed ? "collapse" : "";
        return(
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class={featuredClass}>
                                    <Link to="/" onClick={this.toggleCollapse.bind(this)}>Featured</Link>
                                </li>
                                <li class={postsClass}>
                                    <Link to="/posts" onClick={this.toggleCollapse.bind(this)}>Posts</Link>
                                </li>
                                <li class={settingsClass}>
                                    <Link to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                                </li>
                                <li class={adminClass}>
                                    <Link to="/admin" onClick={this.toggleCollapse.bind(this)}>Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}