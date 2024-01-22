// src/components/NumberOfEvents.js

import { useEffect, useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert, setInfoAlert }) => {
    const [inputNumber, setInputNumber] = useState('32');
    const handleInputChanged = (event) => {
        const value = event.target.value;
        if(isNaN(value) || value < 0){
            setInputNumber(32);
            setCurrentNOE(32);
            setErrorAlert('Only positive numbers are allowed.');
            setInfoAlert('Defaulted back to 32 events');
        }else{
            setInputNumber(value);
            setCurrentNOE(value);
            setErrorAlert('');
            setInfoAlert('');
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            setInputNumber(inputNumber);
        }, 1000);
        return () => clearTimeout(delayDebounce);
    }, [inputNumber]);
    // not sure if this works

    return (
        <div id="number-of-event">
            <input type = "text" value = { inputNumber } onChange = { handleInputChanged } placeholder = "Type a Number"/>
        </div>
    );
}

export default NumberOfEvents;