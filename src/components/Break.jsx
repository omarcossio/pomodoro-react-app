import React, { useState } from "react";
import moment from "moment";


const Break = () => {
    const [breakLength, setBreakLength] = useState(300)

    const decrementByOneMin = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementByOneMin = () => {
        setBreakLength(breakLength + 60);
    }

    const timeToMins = moment.duration(breakLength, 's').minutes();

    return (
        <div className="container text-center">
            <div className="card">
                <p id="break-label">Break</p>
                <p id="break-length">{timeToMins}</p>
                <button id="break-decrement" onClick={decrementByOneMin}>-</button>
                <button id="break-increment" onClick={incrementByOneMin}>+</button>
            </div>
        </div>
    );
}

export default Break;
