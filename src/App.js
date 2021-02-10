import React, { useState, useEffect, useRef } from "react";
import Break from "./components/Break";
import Header from "./components/Header";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null)
  const [sessionLength, setSessionLength] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(300)
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  //change timeLength when sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const decrementBreakByOneMin = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakByOneMin = () => {
    setBreakLength(breakLength + 60);
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      //if in started mode:
      //stop timer
      //clearInterval
      clearInterval(intervalId)
      setIntervalId(null);
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
          //timeLeft is less than 0
          audioElement.current.play()
          //if session: 
          if (currentSessionType === 'Session') {
            //switch to break
            setCurrentSessionType('Break')
            //setTimeleft to breakSessionLength
            setTimeLeft(breakLength)
          }

          //if break:
          else if (currentSessionType === 'Break') {
            //switch to session
            setCurrentSessionType('Session')
            //setTimeLeft to sessionLength
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };


  const decrementByOneMin = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementByOneMin = () => {
    setSessionLength(sessionLength + 60);
  };

  const handleResetButtonClick = () => {
    //reset audio
    audioElement.current.load()
    // clear the timeout interval
    clearInterval(intervalId)
    //set the intervalId null
    setIntervalId(null)
    // set the sessionType to 'Session
    setCurrentSessionType('Session')
    // reset the session length to 25 mins
    setSessionLength(60 * 25)
    // reset the break length to 5 mins
    setBreakLength(60 * 5)
    // reset the timer to 25 mins (initial session length)
    setTimeLeft(60 * 25)
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-4">
            <Break
              breakLength={breakLength}
              decrementBreakByOneMin={decrementBreakByOneMin}
              incrementBreakByOneMin={incrementBreakByOneMin}
            />
            <TimeLeft
              breakLength={breakLength}
              handleStartStopClick={handleStartStopClick}
              timerLabel={currentSessionType}
              sessionLength={sessionLength}
              startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
              timeLeft={timeLeft}
            />
            <Session
              sessionLength={sessionLength}
              decrementByOneMin={decrementByOneMin}
              incrementByOneMin={incrementByOneMin}
            />
            <button id="reset" onClick={handleResetButtonClick}>Reset</button>
            <audio id="beep" ref={audioElement}>
              <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;