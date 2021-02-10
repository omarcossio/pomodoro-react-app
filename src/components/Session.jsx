import React from "react";
import moment from "moment";

const Session = (props) => {
    const {
        sessionLength,
        decrementByOneMin,
        incrementByOneMin,
    } = props;

    const timeToMins = moment.duration(sessionLength, 's').asMinutes();

    return(
        <div className="container text-center">
            <div className="card">
            <p id="session-label">Session</p>
            <p id="session-length">{timeToMins}</p>
            <button id="session-decrement" onClick={decrementByOneMin}>-</button>
            <button id="session-increment" onClick={incrementByOneMin}>+</button>
            </div>
        </div>
    );
}

export default Session;