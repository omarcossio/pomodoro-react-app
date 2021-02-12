
import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({  
    handleStartStopClick,
    startStopButtonLabel, 
    timeLeft,
    timerLabel,
}) => {
    
    
    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
    return(
        <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded">
    <p className="text-red-900 text-2xl" id="timer-label">{timerLabel}</p>
    <p id="time-left">{formattedTimeLeft}</p>       
    <button id="start_stop" onClick={handleStartStopClick}>{startStopButtonLabel}</button>
        </div>
    );
}

export default TimeLeft;