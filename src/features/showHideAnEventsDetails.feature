Feature: Show / Hide events details
    Scenario: An event element is collapsed by default.
        Given user has found an event
        When user views an event element
        Then the event details should be collapsed by default

    Scenario: User can expand an event to see details.
        Given the user has found an event
        When user clicks an event show details button
        Then the event details should be expanded

    Scenario: User can collapse an event to hide details.
        Given the user has an expanded event details
        When the user clicks the hide details button
        Then the event details should collapse
