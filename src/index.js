import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
// redux 셋팅
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { FontStyle } from "./font/font";
import { GlobalStyle } from "./styles/style";
import "bootstrap/dist/css/bootstrap.css";
import ModalComponent from "react-modal-dom";

const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY;
window.Kakao.init(KAKAO_JS_KEY);
const store = createStore(reducers, compose(applyMiddleware(thunk)));

if (process.env.REACT_APP_MUSE_DOMAIN === "https://muse.seoul.kr") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
}

ReactDOM.render(
    <React.StrictMode>
        <FontStyle />
        <GlobalStyle />
        <Provider store={store}>
            <ModalComponent />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
