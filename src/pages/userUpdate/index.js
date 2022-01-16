import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
function UserUpdate() {
    const history = useHistory();
    useEffect(() => {
        try {
            console.log("여기는 success페이지입니다");
            history.push("/myPage");
        } catch (e) {
            console.error(e);
        }
    }, []);
    return <div></div>;
}

export default UserUpdate;
