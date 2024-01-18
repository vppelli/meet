Feature: Specify number of events
    Scenario: When user hasn't specified a number, 32 events are shown by default.
        Given the user opens the app
        When user inputs nothing
        Then the amount of events shown will be (32)

    Scenario: User can change the number of events displayed.
        Given the user opens the app
        When the user specifies (5) in search field
        Then the events will show only (5)
