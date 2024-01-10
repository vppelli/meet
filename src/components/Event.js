// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li>
            <h1>{ event.summary }</h1>
            <p>{ event.created }</p>
            <p>{ event.location }</p>
            {showDetails ?
                <p className = "event-details">
                    About event {event.description}
                </p>
                : null
            }
            <button className = "show-details" onClick = {() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li> 
    );
}

export default Event;