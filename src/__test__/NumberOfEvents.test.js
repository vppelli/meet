// src/__test__/NumberOfEvents.test.js

import { render, within } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE = {() => { }} setErrorAlert = {() => { }} setInfoAlert = {() => { } }/>);
    });
    test('contains an element with the role of the textbox', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
    });
    test('renders default number of events', () => {
        expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32');
    });
    test('renders selected amount of events', async () => {
        const user = userEvent.setup();
        const ammount = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(ammount, '{backspace}{backspace}8');

        expect(ammount).toHaveValue('8');
    });
});

describe('<NumberOfEvents /> integration', () => {
    test('renders suggestions list when the app is rendered.', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
    
        const NumberDOM = AppDOM.querySelector('#number-of-event');
        const numberTextBox = within(NumberDOM).queryByRole('textbox');
        await user.type(numberTextBox, '{backspace}{backspace}8');
        
        const EventListDOM = AppDOM.querySelector('#event-list');
        const NOEListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(NOEListItems.length).toEqual(8);
    });
});