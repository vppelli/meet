// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h1>{ event.summary }</h1>
            <p>{ event.created }</p>
            <p>{ event.location }</p>
            {showDetails ? (
                <div>
                    <h2>
                        About Event
                    </h2>
                    <p className = "event-details">
                        {event.description}
                    </p>
                </div>
            ): null
            }
            <button className = "details-btn" onClick = {() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </li> 
    );
}

export default Event;