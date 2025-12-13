# NaturoFit Frontend

NaturoFit is a Natural Healing Platform connecting users with certified naturopathy and homeopathy professionals. This repository contains the frontend application built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: Lucide React (or SVGs in `public/assets`)

## 🛠️ Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 📦 Installation

1. Navigate to the project directory:
   ```bash
   cd naturofit-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development
Runs the app in development mode with hot reloading.
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Staging
Runs the app using the staging environment configuration.
```bash
npm run dev -- --mode staging
```

### Production Build
Builds the app for production to the `dist` folder.
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## 🌍 Environment Variables

The application uses different API endpoints based on the environment. Configuration files are located in the root:

- `.env.development`: `VITE_API_URL=http://localhost:3000/api`
- `.env.staging`: `VITE_API_URL=https://staging-api.naturofit.com/api`
- `.env.production`: `VITE_API_URL=https://api.naturofit.com/api`

You can access these variables in the code via `import.meta.env.VITE_API_URL` or the centralized `src/config.ts`.

## 📂 Project Structure

```
naturofit-app/
├── public/
│   └── assets/          # Static assets (images, SVGs) for landing, booking, onboarding
├── src/
│   ├── components/      # Shared components (Header, Footer, Layout)
│   ├── pages/           # Application pages (LandingPage, BookingPage, OnboardingPage)
│   ├── config.ts        # Environment configuration
│   ├── App.tsx          # Main application component & Routing
│   └── main.tsx         # Entry point
├── .env.*               # Environment specific variables
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## ✨ Key Features

1.  **Landing Page**: Responsive hero section, expert profiles, testimonials, and "How it works" guide.
2.  **Booking Page**: Comprehensive form for users to book consultations with doctors (integrated with API).
3.  **Onboarding Page**: Registration flow for doctors/practitioners including file and photo uploads.
