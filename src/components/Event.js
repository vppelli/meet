// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h1>{ event.summary }</h1>
            <p>{ event.created }</p>
            <p>{ event.location }</p>
            {showDetails ?
                <p className = "event-details">
                    About event {event.description}
                </p>
                : null
            }
            <button className = "show-more" onClick = {() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </li> 
    );
}

export default Event;