// src/components/CityEventsChart.js

import { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CityEventsChart = ({ events, allLocations }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getData());
    }, [events]);

    const getData = () => {
        const data = allLocations.map((location) => {
            const count = events.filter((event) => event.location === location).length
            const city = location.split((/, | - /))[0]
            return { city, count };
        })
        return data;
    };

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 0 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14, fill: "#fff"}} />
                <YAxis type="number" dataKey="count" name="Number of events" tick={{fill: "#fff"}}/>
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A Event" data={data} fill="rgb(253, 118, 140)" />
            </ScatterChart>
        </ResponsiveContainer>
    );
};



export default CityEventsChart