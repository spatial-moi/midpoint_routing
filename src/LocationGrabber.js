import React, { useState } from 'react'

function LocationGrabber() {
    let [lat, setLat] = useState(null);
    let [long, setLong] = useState(null);


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("Geolocation not supported");
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let coords = [latitude, longitude]
    setLat(coords[0]);
    setLong(coords[1]);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log(typeof latitude)
    console.log(coords);
}

function error() {
    console.log("Unable to retrieve your location");
}
    return (
                <div>
                    <p>Latitude: {lat}  Longitude: {long}</p>
                </div>
    );
}

export default LocationGrabber;