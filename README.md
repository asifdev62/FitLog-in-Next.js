# FitLog

FitLog is a modern and responsive workout planning application built with **Next.js, TypeScript, and Tailwind CSS**.

The application allows users to explore a workout library, view detailed workout information, create a personalized **Today's Plan**, save workouts for later, track completed workouts, and organize their workout routine using sorting and summary statistics.

## Live Demo

**Live Website:** https://fitlog-black-two.vercel.app/

**Repository:**
https://github.com/asifdev62/FitLog-in-Next.js.git

---

## About FitLog

FitLog is designed to make workout planning simple and organized.

Users can browse available workouts and see important information such as duration, calories, rating, difficulty, equipment, and targeted muscle groups.

From the workout details page, users can:

* Add a workout to **Today's Plan**
* Save a workout for later
* View detailed workout instructions
* See sets and repetitions
* Check workout duration
* Check estimated calories burned
* View workout rating and difficulty

The application also provides a dedicated Plan page where users can manage their selected workouts and track their daily workout statistics.

---

## Features

### Workout Library

The home page displays a collection of available workouts.

Users can explore workouts and quickly view important information including:

* Workout name
* Target muscle groups
* Equipment
* Difficulty level
* Workout duration
* Estimated calories burned
* Rating
* Workout image

Each workout has a dedicated details page for viewing more information.

---

### Workout Details

Every workout has its own dynamic details page.

The details page provides more complete information about the selected workout, including:

* Workout name
* Description
* Target muscle groups
* Required equipment
* Difficulty
* Duration
* Calories burned
* Rating
* Sets
* Repetitions
* Step-by-step instructions

Users can also perform actions directly from the workout details page.

#### Add to Today's Plan

Users can add a workout to their daily workout plan.

A maximum of **5 workouts** can be added to Today's Plan.

If the plan already contains 5 workouts, the application prevents users from adding another workout.

This helps users maintain a manageable daily workout routine.

#### Save Workout

Users can save workouts that they are interested in completing later.

Saved workouts are stored separately from Today's Plan.

This means a workout can be saved for future use without immediately adding it to the current daily plan.

---

## Today's Plan

The **Today's Plan** page allows users to manage their daily workout routine.

Users can add workouts from the workout details page and manage them from one place.

Each planned workout can be:

* Viewed
* Removed from the plan
* Marked as completed
* Sorted based on different workout properties

### Plan Statistics

FitLog automatically calculates useful statistics for the current plan.

The Plan page displays:

* Total number of workouts
* Total workout duration
* Total calories
* Completed workout status

For example, if the user adds multiple workouts, FitLog automatically calculates the combined duration and calories.

### Maximum Workout Limit

Today's Plan supports a maximum of **5 workouts**.

This limit prevents users from creating an unnecessarily large daily workout routine.

If 5 workouts have already been added, another workout cannot be added until one is removed.

### Remove Workout

Users can remove any workout from Today's Plan.

Removing a workout also updates the total:

* Workout count
* Duration
* Calories

The interface updates automatically after the workout is removed.

### Mark as Completed

Users can mark a planned workout as completed.

This allows them to keep track of which workouts from the daily plan have already been finished.

---

## Saved Workouts

FitLog provides a separate saved workout system.

Users can save workouts that they want to complete later.

Saved workouts are different from Today's Plan.

For example:

1. A user finds an interesting workout.
2. They save it for later.
3. The workout remains in the Saved list.
4. When they are ready, they can use the workout for their routine.

Users can also remove workouts from the saved list.

Saved workouts are stored in the browser using **localStorage**, so the saved data remains available even after refreshing the page.

---

## Plan and Saved Data

FitLog uses browser **localStorage** to preserve user selections.

The application stores:

* Today's Plan workouts
* Saved workouts
* Workout completion status

This means users can refresh the page without losing their selected workouts.

The stored information is maintained locally in the user's browser.

---

## Sorting

The Plan page includes workout sorting functionality.

Users can sort their existing workouts based on:

* Duration
* Calories
* Rating

For example:

### Duration

Users can organize workouts according to their workout duration.

### Calories

Users can organize workouts based on estimated calories burned.

### Rating

Users can organize workouts based on their rating.

Sorting only changes the order of the existing workout cards. It does not add or remove workouts from the plan.

---

## Responsive Design

FitLog is designed to work across different screen sizes.

The application supports:

* Mobile devices
* Tablets
* Laptops
* Desktop computers

The layout automatically adjusts according to the screen size.

The navigation, workout cards, workout details, plan section, and saved workouts are designed to provide a consistent experience across devices.

---

## Toast Notifications

FitLog uses toast notifications to provide immediate feedback when users perform actions.

Notifications can be shown when users:

* Add a workout to Today's Plan
* Save a workout
* Remove a workout
* Remove a saved workout
* Mark a workout as completed
* Reach the 5-workout plan limit

These notifications make user actions easier to understand.

---

## API

FitLog uses a REST API to retrieve workout information.

### All Workouts

https://api.abcz.workers.dev/api/fitlog

This endpoint is used to retrieve the workout collection.

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

This endpoint is used to retrieve information about a specific workout.

The dynamic workout ID is used to display the correct workout details page.

---

## Technologies Used

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### State Management

* React Context API
* React State

### Data & Storage

* REST API
* localStorage

### UI & Icons

* React Icons
* React Hot Toast

### Development Tools

* Git
* GitHub
* Vercel
* VS Code

---

## Application Flow

The basic user flow of FitLog is:

```text
Workout Library
       │
       ▼
Workout Details
       │
       ├──────────────► Save Workout
       │                    │
       │                    ▼
       │              Saved Workouts
       │
       ▼
Add to Today's Plan
       │
       ▼
Today's Plan
       │
       ├── View Statistics
       ├── Sort Workouts
       ├── Remove Workout
       └── Mark as Completed
```

---

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── WorkoutCard.tsx
│   │   │   ├── WorkoutAction.tsx
│   │   │   ├── Workouts.tsx
│   │   │   └── SortBy.tsx
│   │   │
│   │   └── share/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   ├── Plan/
│   │   ├── page.tsx
│   │   └── sorted.tsx
│   │
│   ├── Workout/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── context/
│   └── WorkoutContext.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── Workout.ts
```

---

## Main Pages

### Home Page

The home page provides access to the workout library.

Users can browse available workouts and select a workout to view its full details.

### Workout Details Page

The dynamic workout details page displays complete information about a selected workout.

Route:

```text
/Workout/[id]
```

Users can add the workout to Today's Plan or save it for later.

### Plan Page

The Plan page is used to manage the user's current workout routine.

Route:

```text
/Plan
```

It includes:

* Planned workouts
* Total workout count
* Total duration
* Total calories
* Sorting
* Remove functionality
* Completed status

### Saved Workouts

Saved workouts are managed separately so users can keep workouts they want to use in the future.

---

## Key Functionality

### Add Workout

```text
Workout Details
       ↓
Add to Today's Plan
       ↓
Workout added
       ↓
Plan statistics updated
```

### Save Workout

```text
Workout Details
       ↓
Save Workout
       ↓
Workout stored
       ↓
Available in Saved Workouts
```

### Complete Workout

```text
Today's Plan
       ↓
Mark as Completed
       ↓
Workout status updated
```

### Remove Workout

```text
Today's Plan
       ↓
Remove
       ↓
Workout deleted from plan
       ↓
Statistics updated
```

---

## Data Persistence

FitLog uses `localStorage` to maintain user-specific workout selections.

Because the data is stored in the browser, the user's plan and saved workouts remain available after:

* Page refresh
* Navigating between pages
* Closing and reopening the browser

The workout information itself is retrieved from the REST API.

---

## Future Improvements

Possible future improvements include:

* User authentication
* Cloud-based workout synchronization
* Weekly workout planning
* Workout history
* Progress tracking
* Personal workout statistics
* Custom workout creation
* Favorite muscle groups
* Workout search
* Advanced filtering
* Dark mode
* User profile
* Workout reminders

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/asifdev62/FitLog-in-Next.js.git
```

Navigate to the project directory:

```bash
cd FitLog-in-Next.js
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## Deployment

FitLog can be deployed using **Vercel**.

The project is built with Next.js and can be connected directly to a GitHub repository for deployment.

---

## Author

**Md Asif Ali**

GitHub:
https://github.com/asifdev62
