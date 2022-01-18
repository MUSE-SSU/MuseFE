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
import { framer } from "framer";

function WeeklyColorContainer() {
    const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
    const [weeklyColors, setWeeklyColors] = useState([]);
    const [weeklyColorsHexa, setWeeklyColorsHexa] = useState([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`${API_DOMAIN}/post/color_of_week/`).then((res) => {
            try {
                console.log(res.data);
                setWeeklyColors(res.data.color);
                setWeeklyColorsHexa(res.data.hexa_code);
                console.log(weeklyColors);
            } catch (e) {
                console.error(e);
            }
        });
    }, []);
    return (
        <MainContainer>
            <NameContainer>
                <ColorContainerName>Weekly Colour</ColorContainerName>
            </NameContainer>
            <ColorContainer>
                {weeklyColors.map((weeklyColor, idx) => (
                    <Link to={`/search/?q=${weeklyColors[idx]}`}>
                        <ColorCard
                            color={`${weeklyColor}`}
                            hexa={weeklyColorsHexa[idx]}
                        />
                    </Link>
                ))}
            </ColorContainer>
        </MainContainer>
    );
}

export default WeeklyColorContainer;
