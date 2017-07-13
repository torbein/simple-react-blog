import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, browserHistory} from "react-router-dom";
import { Provider } from "react-redux";


import store, {history} from "./store"
import Layout from "./pages/Layout";
import Footer from "./components/layout/Footer"
import Settings from "./Pages/Settings";
import Posts from "./pages/Posts";
import Featured from "./pages/Featured";
import Admin from "./pages/Admin";



const app = document.getElementById('app');

ReactDOM.render(

    <Provider store = {store}>
        <Router history={browserHistory}>
                <Layout>
                    <Route path="/posts" component={Posts} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/" component={Featured} />
                </Layout>
        </Router>
    </Provider>,
app);