// src/features/showHideAnEventsDetails.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        let EventListDOM;
        given('user has found an event', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('user views an event element', () => {

        });

        then('the event details should be collapsed by default', () => {
            const eventDetails = EventListDOM.querySelector('.event-details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user has found an event', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('user clicks an event show details button', async () => {
            const user = userEvent.setup();
            AppDOM = AppComponent.container.firstChild;
            const showDetails = AppDOM.querySelector('.details-btn');

            await user.click(showDetails);
        });

        then('the event details should be expanded', () => {
            AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, and, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user has an expanded event details', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
            AppDOM = AppComponent.container.firstChild;
            const showDetails = AppDOM.querySelector('.details-btn');
            const user = userEvent.setup();

            await user.click(showDetails);
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeInTheDocument();
        });

        when('the user clicks the hide details button', async () => {
            AppDOM = AppComponent.container.firstChild;
            const hideDetails = AppDOM.querySelector('.details-btn');
            const user = userEvent.setup();

            await user.click(hideDetails);
        });

        then('the event details should collapse', () => {
            AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).not.toBeInTheDocument();
        });

    });
});