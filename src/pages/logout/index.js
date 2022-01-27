import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOG_OUT } from "../../constants/actionTypes";
function Logout() {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch({ type: LOG_OUT });
        history.push("/");
    });

    return <></>;
}

export default Logout;
