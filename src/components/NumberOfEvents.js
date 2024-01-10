// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = () => {
    const [inputNumber, setInputNumber] = useState('32');
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setInputNumber(value);
    }

    return (
        <div id="number-of-event">
            <input type = "text" value = { inputNumber } onChange = { handleInputChanged }/>
        </div>
    );
}

export default NumberOfEvents;