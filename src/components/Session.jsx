import React from "react";
import moment from "moment";
import { BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButton, PlusMinusButtonContainer } from "../ui/BreakSessionUi";

const Session = (props) => {
    const {
        sessionLength,
        decrementByOneMin,
        incrementByOneMin,
    } = props;

    const timeToMins = moment.duration(sessionLength, 's').asMinutes();

    return(
        <BreakSessionContainer>
            <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
            <BreakSessionTime id="session-length">{timeToMins}</BreakSessionTime>
            <PlusMinusButtonContainer>
            <PlusMinusButton id="session-decrement" onClick={decrementByOneMin}>-</PlusMinusButton>
            <PlusMinusButton id="session-increment" onClick={incrementByOneMin}>+</PlusMinusButton>
            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    );
}

export default Session;