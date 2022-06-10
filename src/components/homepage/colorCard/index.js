import React, { useEffect } from "react";
import {
    MainContainer,
    Test,
    Logo,
    ColorName,
    InfoContainer,
    ColorHexa,
} from "./style";

function ColorCard(props) {
    return (
        <MainContainer
            color={props?.hexa}
            whileHover={{
                scale: 1.04,
            }}
        >
            <InfoContainer>
                <Logo>MUSE</Logo>
                <ColorName>{props.color}</ColorName>
                <ColorHexa>{props.hexa}</ColorHexa>
            </InfoContainer>
            <Test color={`${props.hexa}`} />
        </MainContainer>
    );
}

export default ColorCard;
