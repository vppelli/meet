// src/__test__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
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