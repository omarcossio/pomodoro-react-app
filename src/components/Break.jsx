import React, { useState } from "react";


const Break = () => {
    const [breakLength, setBreakLength] = useState(300)


    return(
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLength}</p>
        </div>
    );
}

export default Break;