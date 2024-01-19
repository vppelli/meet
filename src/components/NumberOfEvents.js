// src/components/NumberOfEvents.js

import { useEffect, useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    const [inputNumber, setInputNumber] = useState('32');
    const handleInputChanged = (event) => {
        const value = event.target.value;
        if(isNaN(value) || value < 0){
            setInputNumber(32);
            setCurrentNOE(32);
        }else{
            setInputNumber(value);
            setCurrentNOE(value);
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