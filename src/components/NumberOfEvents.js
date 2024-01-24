// src/components/NumberOfEvents.js

import { useState } from "react";
import { debounce } from "lodash";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert, setInfoAlert }) => {
    const [inputNumber, setInputNumber] = useState('32');
    const handleInputChanged = (event) => {
        const value = event.target.value;
        if (isNaN(value) || value < 0) {
            setInputNumber(32);
            setCurrentNOE(32);
            setErrorAlert('Only positive numbers are allowed.');
            setInfoAlert('Defaulted back to 32 events');
        } else {
            setInputNumber(value);
            setCurrentNOE(value);
            setErrorAlert('');
            setInfoAlert('');
        }
    };
    const handleDebounce = debounce(handleInputChanged, 500);

    return (
        <div id="number-of-event">
            <input type="text" onChange={handleDebounce} placeholder="Type a Number" defaultValue={inputNumber}/>
        </div>
    );
}

export default NumberOfEvents;