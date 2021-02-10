import React, { useState } from "react";
import Break from "./components/Break";
import Header from "./components/Header";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(300)

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
  }

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
  }
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
              sessionLength={sessionLength}
            />
            <Session
              sessionLength={sessionLength}
              decrementByOneMin={decrementByOneMin}
              incrementByOneMin={incrementByOneMin}
            />
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