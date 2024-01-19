// src/features/specifyNumberOfEvents.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        when('user inputs nothing', () => {

        });

        then('the amount of events shown will be (32)', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user opens the app', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('the user specifies (5) in search field', async () => {
            AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-event');
            const NumberOfEvents = within(NumberOfEventsDOM).queryByRole('textbox');
            const user = userEvent.setup();
            await user.type(NumberOfEvents, '{backspace}{backspace}8');
        });

        then('the events will show only (5)', async() => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(8);
            });
        });
    });
});