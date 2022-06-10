import React from "react";
import Success from "./pages/auth/Success";
import Auth from "./pages/auth/Auth";
import Register from "./pages/Register/Register";
import RegisterSuccess from "./pages/Register/RegisterSuccess";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "react-router-modal/css/react-router-modal.css";
import {
    Home,
    Archives,
    Muse,
    UserUpdate,
    MyPage,
    Replace,
    Contest,
    Search,
    Info,
    Logout,
} from "./pages";
function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route path="/redirect-login" component={Success} />
            <Route path="/register" component={Register} />
            <Route path="/redirect-register" component={RegisterSuccess} />
            <Route path="/muse" component={Muse} />
            <Route path="/reference" component={Archives} />
            <Route path="/userUpdate" component={UserUpdate} />
            <Route path="/my-page/:nickname" component={MyPage} />
            <Route path="/replace" component={Replace} />
            <Route path="/contest" component={Contest} />
            <Route path="/search" component={Search} />
            <Route path="/info" component={Info} />
            <Route path="/redirect-logout" component={Logout} />
        </Router>
    );
}

export default App;
