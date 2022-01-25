import React from "react";
import { IconButton } from "gestalt";
import { IconContainer } from "./style";
import { Link } from "react-router-dom";
function InfoButton(props) {
    return (
        <Link to="/info">
            <IconContainer name={props.name}>
                <IconButton icon="question-mark" size="xl" bgColor="darkGray" />
            </IconContainer>
        </Link>
    );
}

export default InfoButton;
