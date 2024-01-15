// src/__test__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
        EventComponent = render(<Event event = { event }/>);
    });
    // test('render event location', async () => {
    //     const allEvents = await getEvents();
    //     EventComponent.rerender(<Event event = { allEvents[0] } />);
    //     expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    // });
    test('render event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });
    test('the .summary key from the event object is rendered', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });
    test('the .created key from the event object is rendered', () => {
        expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
    });
    test('the .locations key from the event object is rendered', () => {
        expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
    });
    test('default, event details section sould be hidden', () => {
        const eventDetails = EventComponent.container.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });
    test('render event details when button (show details) is clicked', async () => {
        const user = userEvent.setup();
        const showDetails = EventComponent.queryByText('Show Details');
        const eventDetails = EventComponent.container.querySelector('.event-details');

        await user.click(showDetails);
        console.log(eventDetails);
        expect(eventDetails).toBeInTheDocument();

    });
    test('hide details when button (hide details) is clicked', async () => {
        const user = userEvent.setup();
        const hideDetails = EventComponent.queryByText('Hide Details');
        const eventDetails = EventComponent.container.querySelector('.event-details');
        const showDetails = EventComponent.queryByText('Show Details');

        await user.click(hideDetails);
        expect(showDetails).toBeInTheDocument();
        expect(eventDetails).not.toBeInTheDocument();
    });
});