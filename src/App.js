import React, { useState, useEffect } from 'react';
import LocationGrabber from "./LocationGrabber";
import UserSpace from "./UserSpace";
import RequestMeet from "./RequestMeet";
function App() {
  return (
      <div className="App">
        <LocationGrabber/>
        <div className="Content">
        </div>
          <div>
              <RequestMeet/>
          </div>
      </div>
  );
}

export default App;
