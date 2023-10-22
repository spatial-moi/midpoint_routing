import React from 'react';
import LocationGrabber from "./LocationGrabber";
function App() {
  return (
      <LocationGrabber/>
  );
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);

} else {
  console.log("Geolocation not supported");
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  return [latitude, longitude]
}

function error() {
  console.log("Unable to retrieve your location");
}

export default App;
