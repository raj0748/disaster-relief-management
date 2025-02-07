import React, { useState } from "react";
import axios from "axios";

const LocationSearch = () => {
    const [place, setPlace] = useState("");
    const [location, setLocation] = useState(null);

    const fetchLocation = async () => {
        const res = await axios.get(`http://127.0.0.1:5000/get_location?place=${place}`);
        setLocation(res.data);
    };

    return (
        <div>
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
            <button onClick={fetchLocation}>Find Location</button>
            {location && <p>Latitude: {location.lat}, Longitude: {location.lon}</p>}
        </div>
    );
};

export default LocationSearch;
