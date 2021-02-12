import React from "react";
import moment from "moment";
import { BreakSessionLabel, BreakSessionContainer, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton } from "../ui/BreakSessionUi";

const Break = (props) => {
    const {
        breakLength,
        decrementBreakByOneMin,
        incrementBreakByOneMin,
    } = props;

    const timeToMins = moment.duration(breakLength, 's').asMinutes();

    return (
        <BreakSessionContainer>
                <BreakSessionLabel id="break-label">Break</BreakSessionLabel>
                <BreakSessionTime id="break-length">{timeToMins}</BreakSessionTime>
                <PlusMinusButtonContainer>
                <PlusMinusButton id="break-decrement" onClick={decrementBreakByOneMin}>-</PlusMinusButton>
                <PlusMinusButton id="break-increment" onClick={incrementBreakByOneMin}>+</PlusMinusButton>
                </PlusMinusButtonContainer>
        </BreakSessionContainer>
    );
}

export default Break;
