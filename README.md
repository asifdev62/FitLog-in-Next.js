# FitLog

A modern workout planning application built with Next.js, TypeScript, and Tailwind CSS.

FitLog allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and organize their workouts based on duration, calories, and rating.

## Live Demo

Live Website: [Add your Vercel link]

Repository: [(https://github.com/asifdev62/FitLog-in-Next.js.git)]

## Features

- Browse workouts from the workout library
- View detailed information for each workout
- Add workouts to Today's Plan
- Save workouts for later
- Remove workouts from the plan or saved list
- Mark planned workouts as completed
- Add a maximum of 5 workouts to the daily plan
- Sort workouts by duration, calories, or rating
- Calculate total workout duration
- Calculate total calories
- Store plan and saved workouts using localStorage
- Responsive design for mobile, tablet, and desktop
- Toast notifications for user actions

## Workout Library

The workout library displays useful information for each exercise, including:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Rating

Each workout also has a dedicated details page with its description, sets, reps, and instructions.

## Today's Plan

Users can build their daily workout routine by adding workouts from the workout details page.

The plan includes:

- Total number of workouts
- Total duration
- Total calories
- Remove workout option
- Mark as completed option
- Workout sorting

A maximum of 5 workouts can be added to the daily plan.

## Saved Workouts

Users can save workouts they want to complete later.

Saved workouts are stored in the browser using localStorage, so they remain available after refreshing the page.

## Sorting

The Plan page provides three sorting options:

- Duration
- Calories
- Rating

Selecting an option changes the order of the existing workout cards.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Context API
- React Icons
- React Hot Toast
- REST API
- localStorage
- Git and GitHub

## API

FitLog uses a REST API to retrieve workout data.

### All Workouts

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

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
