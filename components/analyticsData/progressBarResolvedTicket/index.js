import React from "react"

import SemiCircleProgressBar from "react-progressbar-semicircle"
const index = ({ percentage }) => {
    return (
        <SemiCircleProgressBar
            diameter={300}
            percentage={percentage}
            strokeWidth={30}
            stroke={"#34D399"}
            background={"#F4F4F5"}
        />
    )
}

export default index
