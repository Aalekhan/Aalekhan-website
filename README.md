# IT Solutions Company Website

A full-stack website for an IT solutions company built with Next.js, TypeScript, and Node.js.

## Tech Stack

### Frontend
- Next.js with TypeScript
- TailwindCSS
- Server-Side Rendering (SSR)
- SEO Optimized

### Backend
- Node.js with Express
- TypeScript
- Security features (Helmet, CORS)
- REST API endpoints

## Project Structure
```
/
├── frontend/          # Next.js frontend application
├── backend/          # Express backend application
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Git

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add required environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add required environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

## Features
- Responsive design
- SEO optimized with meta tags and Open Graph support
- Contact form with backend integration
- Service showcase
- About us section
- Blog/case studies section (optional)

## Development
- Frontend runs on `http://localhost:3000`
- Backend runs on `http://localhost:5000`

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
CORS_ORIGIN=http://localhost:3000
``` 