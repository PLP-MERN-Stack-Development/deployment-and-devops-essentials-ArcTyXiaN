<<<<<<< HEAD
# MERN Blog DevOps Deployment

A production-ready MERN blog application prepared for a university DevOps and deployment assignment. This repo contains a React (Vite) client, an Express API server, and a CI pipeline for build verification.

**Project Overview**
- Full-stack blog with authentication, posts, categories, and comments.
- Environment-driven configuration for dev and production.
- Production middleware, centralized error handling, and health checks.
- CI pipeline for installs, build, and basic backend app check.

**Tech Stack**
- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, Mongoose, JWT
- DevOps: GitHub Actions, Render/Railway (backend), Vercel (frontend)
- Monitoring: Morgan logs, optional Sentry

**Project Structure**
- `client` React frontend (Vite)
- `server` Express backend
- `.github/workflows/ci.yml` CI pipeline
- `.env.example` root environment template

**Local Setup**
1. Install dependencies
```bash
cd server
npm install
cd ../client
npm install
```
2. Configure environment variables
```bash
# client/.env.development
REACT_APP_API_URL=http://localhost:5000/api

# server/.env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```
3. Run dev servers
```bash
cd server
npm run dev
```
```bash
cd client
npm run dev
```

**Environment Variables**
- Client: `REACT_APP_API_URL` Base URL of the backend API (e.g. `https://your-backend.onrender.com/api`)
- Server: `PORT` Express port
- Server: `MONGO_URI` MongoDB Atlas connection string
- Server: `JWT_SECRET` JWT signing secret
- Server: `NODE_ENV` `development` or `production`
- Server: `CLIENT_URL` Allowed CORS origin for the frontend
- Server: `SENTRY_DSN` Optional Sentry DSN
- Server: `MONGO_MAX_POOL_SIZE` Optional pool size
- Server: `MONGO_MIN_POOL_SIZE` Optional pool size

**MongoDB Atlas Setup**
1. Create a MongoDB Atlas cluster.
2. Add a database user with read/write permissions.
3. Whitelist your deployment IPs (or `0.0.0.0/0` for testing).
4. Copy the connection string into `server/.env` as `MONGO_URI`.

**Backend Deployment (Render or Railway)**
1. Create a new service pointing to the `server` folder.
2. Set environment variables from `server/.env.example`.
3. Ensure `PORT` is provided by the platform.
4. Deploy and verify:
`GET /health` should return status and uptime.
Backend deployed URL: `TODO_ADD_BACKEND_URL`

**Frontend Deployment (Vercel)**
1. Import the repo and set the root to `client`.
2. Set build command to `npm run build` and output to `dist`.
3. Add `REACT_APP_API_URL` with your backend URL.
4. Deploy and verify:
Frontend deployed URL: `TODO_ADD_FRONTEND_URL`

**CI/CD (GitHub Actions)**
- Workflow: `.github/workflows/ci.yml`
- Runs on every push.
- Installs dependencies for `client` and `server`.
- Builds the React client.
- Runs tests when present.
- Performs a backend app load check.
- Add CI screenshots here:
`TODO_ADD_CI_SCREENSHOT_1`
`TODO_ADD_CI_SCREENSHOT_2`

**Monitoring and Logging**
- `morgan` logs HTTP requests.
- `helmet` sets secure HTTP headers.
- Optional Sentry: add `SENTRY_DSN` in `server/.env` to enable error capture.
- Health check: `GET /health`

**Production Notes**
- Use strong secrets for `JWT_SECRET`.
- Use HTTPS for frontend and backend URLs.
- Keep `MONGO_URI` and secrets out of version control.
=======
# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week7-Assignment.md` file
4. Use the provided templates and configuration files as a starting point

## Files Included

- `Week7-Assignment.md`: Detailed assignment instructions
- `.github/workflows/`: GitHub Actions workflow templates
- `deployment/`: Deployment configuration files and scripts
- `.env.example`: Example environment variable templates
- `monitoring/`: Monitoring configuration examples

## Requirements

- A completed MERN stack application from previous weeks
- Accounts on the following services:
  - GitHub
  - MongoDB Atlas
  - Render, Railway, or Heroku (for backend)
  - Vercel, Netlify, or GitHub Pages (for frontend)
- Basic understanding of CI/CD concepts

## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available
- **Railway**: Developer-friendly, generous free tier
- **Heroku**: Well-established, extensive documentation

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:
- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all deployment tasks
2. Set up CI/CD pipelines with GitHub Actions
3. Deploy both frontend and backend to production
4. Document your deployment process in the README.md
5. Include screenshots of your CI/CD pipeline in action
6. Add URLs to your deployed applications

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/) 
>>>>>>> 75d98ac650dbfbdd14dcd9a52b32b5dfec8ceeda
