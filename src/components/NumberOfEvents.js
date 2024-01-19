// src/components/NumberOfEvents.js

import { useEffect, useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    const [inputNumber, setInputNumber] = useState('32');
    const [debouncedInputValue, setDebouncedInputValue] = useState('');
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setInputNumber(value);
        setCurrentNOE(value);
    };

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(inputNumber);
        }, 500);
        return () => clearTimeout(delayInputTimeoutId);
    }, [inputNumber]);

    return (
        <div id="number-of-event">
            <input type = "text" value = { inputNumber } onChange = { handleInputChanged }/>
        </div>
    );
}

export default NumberOfEvents;