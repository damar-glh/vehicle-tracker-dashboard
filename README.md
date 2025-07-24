# Vehicle Tracker Dashboard

Frontend Take-Home Assignment for PT. Widya Inovasi Indonesia. This project is a web-based vehicle tracking dashboard built using modern frontend technologies such as React, TypeScript, Tailwind CSS and Zustand.

## Deployment

This project is deployable via Vercel:

> Live demo: https://vehicle-tracker-dashboard-mu.vercel.app/

## Features

- Display a list of vehicles with real-time telemetry data
- View detailed telemetry per vehicle
- Responsive design using Tailwind CSS
- Global state management with Zustand
- UI components built with ShadCN UI
- Proper handling for loading and error states
- Code formatting, linting and Git hooks setup

## Getting Started

### Prerequisites

- Node.js (>=18.x)
- npm (>=9.x) or yarn

### Installation

1. Clone the repository:

   ```bash
git clone https://github.com/damar-glh/vehicle-tracker-dashboard.git
cd vehicle-tracker-dashboard
   ```

2. Install dependencies:

   ```bash
npm install
   ```

3. Start the development server:

   ```bash
npm run dev
   ```

4. Open http://localhost:5173 to view it in the browser.

## Code Quality

This project uses the following tools to ensure code quality and consistency:

- ESLint with recommended rules and plugins:
- eslint-plugin-react
- eslint-plugin-tailwindcss
- eslint-plugin-unused-imports
- Prettier for code formatting
- Husky for pre-commit hooks
- lint-staged to run linting/formatting only on staged files

### Lint and Format Manually

```bash
npm run lint
npm run format
```

### Git Hook (via Husky)

Husky and lint-staged are automatically configured during npm install to run checks before every commit.

## Commit Convention

This project uses Conventional Commits via Commitizen.

To create a commit:

```bash
npm run commit
```

This ensures consistent commit messages and changelogs.

