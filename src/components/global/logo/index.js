import React from "react";
import * as style from "./style";
import { Flex } from "gestalt";
function Logo() {
    return (
        <div>
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <style.LogoH1
                    initial={{
                        opacity: 0,
                        y: 100,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                        },
                    }}
                    whileHover={{
                        rotate: [0, 14, -2, 0],
                    }}
                    drag
                    dragConstraints={{
                        top: 10,
                        left: -30,
                        right: 30,
                        bottom: -10,
                    }}
                >
                    MUSE
                </style.LogoH1>
            </Flex>
        </div>
    );
}

export default Logo;
