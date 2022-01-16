import React from 'react'
import * as style from './style'
import { Flex } from 'gestalt'
function Logo() {
    return (
        <div>
            <Flex justifyContent="center" alignItems="center" direction="column">
            <style.LogoH1
                initial = {{
                    x: 400
                }}
                animate = {{
                    x: [400, -70, 34, -12, 0]
                }}
                whileHover = {{
                    
                    rotate: [0, 14, -2, 0]
                }}
                drag
                dragConstraints={{
                top: 10,
                left: -30,
                right: 30,
                bottom: -10
                }}
            >MUSE</style.LogoH1>
            </Flex>
        </div>
    )
}

export default Logo
