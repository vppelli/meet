// src/App.js

import './App.css';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are Offline, information loaded from last time Online");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className = "App">
      <div>
        <span className = "title">Meet App</span>
      </div>
      <div className = "alerts-container">
        {infoAlert.length ? <InfoAlert text = {infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text = {errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text = {warningAlert} /> : null}
      </div>
      <div>
      <CitySearch allLocations = {allLocations} setCurrentCity = {setCurrentCity} setInfoAlert = {setInfoAlert} />
      <NumberOfEvents setCurrentNOE = {setCurrentNOE} setErrorAlert = {setErrorAlert} setInfoAlert = {setInfoAlert} />
      </div>
      <EventList events = {events} />
    </div>
  );
}

export default App;
