import React, { useState, useEffect } from "react";
import axios from "axios";
import { ColorCard } from "../../../components";
import { useHistory, Link } from "react-router-dom";
import {
    MainContainer,
    ColorContainerName,
    ColorContainer,
    NameContainer,
} from "./style";
import { GetColorWeek } from "../../../api";
import { framer } from "framer";

function WeeklyColorContainer() {
    const colorData = GetColorWeek();
    return (
        <MainContainer>
            <NameContainer>
                <ColorContainerName>Weekly Colour</ColorContainerName>
            </NameContainer>
            <ColorContainer>
                {colorData?.color.map((weeklyColor, idx) => (
                    <Link to={`/search?q=${colorData.color[idx]}`}>
                        <ColorCard
                            color={`${weeklyColor}`}
                            hexa={colorData.hexa_code[idx]}
                        />
                    </Link>
                ))}
            </ColorContainer>
        </MainContainer>
    );
}

export default WeeklyColorContainer;
