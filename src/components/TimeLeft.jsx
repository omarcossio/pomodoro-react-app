
import React, { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength }) => {
    const [intervalId, setIntervalId] = useState(null)
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    //change timeLength when sessionLength changes
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const isStarted = intervalId !== null;
    const handleStartStopClick = () => {
if (isStarted) {
//if in started mode:
    //stop timer
    //clearInterval
clearInterval(intervalId)
} else {
    // if we are in stopped mode:
        //decrement timeLeft by one second 
        // use setInterval
    const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
            const newTimeLeft = prevTimeLeft - 1;
            if (newTimeLeft >= 0) {
                return prevTimeLeft - 1
            }
            return prevTimeLeft
        });
    }, 1000);
    setIntervalId(newIntervalId);
}       
    }

    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
    return(
        //MM:SS
        <div>
            {formattedTimeLeft}
            <button onClick={handleStartStopClick}>{isStarted ? "Stop" : "Start"}</button>
        </div>
    );
}

export default TimeLeft;