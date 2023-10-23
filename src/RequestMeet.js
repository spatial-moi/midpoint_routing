import React, { useState } from 'react'

function RequestMeet(){
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
    }

    console.log(lat);
    console.log(long);
    function error() {
    }


    function sendForGeoprocessing() {
        alert('Sent for Geoprocessing');
    }

    return (
        <div>
                <button onClick={sendForGeoprocessing}> Request Meeting </button>
        </div>
    );

}

export default RequestMeet;