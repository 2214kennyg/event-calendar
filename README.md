# Event Calendar

## Design Goals / Approach

-   Build a calendar app using Typescript React to explore and familiarise using Typescript
-   Create a full stack program, with the contents here as the frontend
-   Part of nology suggested post-course projects

---

## Features

-   Displays the current month and year, and can navigate between consecutive months
-   Opens a modal, to allow adding events to specific days
-   Shows events and a countdown to when the event occurs

## Known issues

-   Modal is currently placeholder
-   Events feature isn't implemented yet

---

## Future Goals

-   Currently the opened modal is empty, intended to include a form that can add events to specific days
-   Need to also show events for specific day, as a modal that includes a countdown timer
-   Highlight the current day when viewing the calendar
-   Skip to a specific date, instead of scrolling through one by one

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

## Further details, related projects

-   The backend data is stored using Spring, https://github.com/2214kennyg/event-calendar-spring
