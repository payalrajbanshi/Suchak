#  Suchak – Smart Task Management System

Suchak is a fullstack productivity and task management system built using **ASP.NET Core Web API (Clean Architecture)** for the backend and **React (TypeScript)** for the frontend. It helps users manage tasks intelligently using smart scheduling, balanced planning, and productivity insights.

##  Features

###  Authentication
- User registration & login (JWT-based)
- Secure password hashing
- Protected API routes

###  Task Management
- Create, update, delete tasks
- Task prioritization (High / Medium / Low)
- Mark tasks as complete/incomplete
- Reorder tasks (drag & drop support)
- Task status tracking (Todo / In Progress / Done)

###  Smart Productivity Engine
- Smart daily task suggestions
- Balanced daily workload planning
- Automatic time distribution based on deadlines
- Priority-based scheduling logic

###  Dashboard
- Total tasks summary
- Completed vs pending tasks
- Weekly progress report

### Theme Customization
- Dark/light mode support
- Custom primary color
- Background image customization per user

## Tech Stack

### Backend
- ASP.NET Core Web API
- Clean Architecture (Core, API, Infrastructure)
- Entity Framework Core
- JWT Authentication
- Repository Pattern

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS

### Database
- SQL Server

## Smart Features Logic

- Tasks are distributed based on:
  - Deadline proximity
  - Priority weight
  - Remaining estimated hours
- Daily workload is calculated dynamically per user
- Balanced plan ensures no overload per day


##  Authentication Flow

1. User registers → password is hashed
2. Login returns JWT token
3. Token is stored in frontend
4. All protected routes use Authorization header



