# Event Calendar

## Design Goals / Approach

-   Build a calendar app using Typescript React to explore and familiarise using Typescript
-   Create a full stack program, with the contents here as the frontend
-   Part of nology suggested post-course projects

---

## Features

-   Displays the current month and year, and can navigate between consecutive months
-   Opens a modal, to allow adding events to specific days
-   Shows events for particular days, with various information displayed in modal
-   Modal displays countdown to when the event ends
-   Can filter events by label or location

## Known issues

-   Adding an event to a day messes with the dimensions, can account for one event, but can't account for multiple events in a day
-   Countdown timer loads slowly
-   Events across multiple days only display on the start date
-   Deleting event doesn't rerender page

---

## Future Goals

-   Highlight the current day when viewing the calendar
-   Skip to a specific date, instead of scrolling through one by one
-   Autofill start date in event form for current date
-   Display multiday events across multiple days

---

## Change logs

### 30/06/2023

-   Fixed display of days not in the current month (previously showed as 0)
-   Placeholder content for the form in the modal

### 01/07/2023

-   Added functionality to pass information through backend
-   Created form component to use in the day modal
-   Added styling to form
-   Fixed bug where days would inaccurately display if first day is sunday

### 02/07/2023

-   Added event display for each day, clickable to open a modal
-   Modal display includes countdown
-   Adjusted styling

### 03/07/2023

-   Fixed rendering of days after changing months bug
-   Added delete button for event modal

### 03/07/2023 - 2

-   Added filtering by label or location, using the backend

## Further details, related projects

-   The backend data is stored using Spring, https://github.com/2214kennyg/event-calendar-spring
