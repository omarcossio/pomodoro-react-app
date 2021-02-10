import React from "react";
import moment from "moment";


const Break = (props) => {
    const {
        breakLength,
        decrementBreakByOneMin,
        incrementBreakByOneMin,
    } = props;

    const timeToMins = moment.duration(breakLength, 's').asMinutes();

    return (
        <div className="container text-center">
            <div className="card">
                <p id="break-label">Break</p>
                <p id="break-length">{timeToMins}</p>
                <button id="break-decrement" onClick={decrementBreakByOneMin}>-</button>
                <button id="break-increment" onClick={incrementBreakByOneMin}>+</button>
            </div>
        </div>
    );
}

export default Break;
