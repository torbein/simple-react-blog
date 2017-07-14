import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Posts from "./pages/Posts";
import Featured from "./pages/Featured";
import Admin from "./pages/Admin";
import Post from "./pages/Post";

const ClientRouter = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Featured} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/posts/:id" component={Post} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/admin" component={Admin} />

                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default ClientRouter;