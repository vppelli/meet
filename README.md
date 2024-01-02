## Feature 2
As a User, I should be able to Show/Hide Event Details. So that I can learn more about the Event.
- Scenario 1: An event element is collapsed by default.
  Given the user has opened the events app
  When the user views an event element
  Then the event details should be collapsed by default
- Scenario 2: User can expand an event to see details.
- Scenario 3: User can collapse an event to hide details.

## Feature 3
As a User, I should be able to Specify Number of Events. So that viewing events are better.
- Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
- Scenario 2: User can change the number of events displayed.

## Feature 4
As a User, I should be able to Use the App When Offline. So that when theres no connection I can still view my Event history.
- Scenario 1: Show cached data when there’s no internet connection.
- Scenario 2: Show error when user changes search settings (city, number of events).

## Feature 5
As a User, I should be able to Add an App Shortcut to the Home Screen. So that it is of easy access.
- Scenario 1: User can install the meet app as a shortcut on their device home screen

## Feature 6
As a User, I should be able to Display Charts Visualizing Event Details. So that I am aware of how many events are avalible and where.
- Scenario 1: Show a chart with the number of upcoming events in each city.
