import React from "react";
import {
    MainContainer,
    InfoContainer,
    Avatar,
    Nickname,
    Introduce,
    IntroduceContainer,
} from "./style";
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <Link to={`/my-page/${props.nickname}`}>
            <MainContainer>
                <Avatar src={`${props.avatar}`} alt="" />
                <InfoContainer>
                    <Nickname>{props.nickname}</Nickname>

                    <Introduce>{props.introduce}</Introduce>
                </InfoContainer>
            </MainContainer>
        </Link>
    );
}

export default UserCard;
