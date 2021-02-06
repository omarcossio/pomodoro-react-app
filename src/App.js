import React from "react";
import Break from "./components/Break";
import Sessions from "./components/Sessions";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
       <Header />
        <div className="row">
          <div className="col-4">
            <Break />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <Sessions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;