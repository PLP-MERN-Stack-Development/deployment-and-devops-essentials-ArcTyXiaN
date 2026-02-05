# MERN Blog DevOps Deployment

Full‑stack MERN blog application prepared for a DevOps and deployment assignment. The repository contains a Vite React client, an Express API server, and a GitHub Actions CI pipeline.

**Features**
- Authentication (JWT)
- Posts, categories, and comments
- Centralized error handling and health check
- Production middleware (`helmet`, `morgan`)
- CI pipeline for install, test, build, and backend load check

**Tech Stack**
- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, Mongoose, JWT
- CI: GitHub Actions
- Monitoring: Morgan logs, optional Sentry

**Project Structure**
- `client` Vite React frontend
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
VITE_API_URL=http://localhost:5000/api

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
- Client: `VITE_API_URL` Base URL of the backend API (e.g. `https://your-backend.onrender.com/api`)
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
3. Add `VITE_API_URL` with your backend URL.
4. Deploy and verify:
Frontend deployed URL: `TODO_ADD_FRONTEND_URL`

**CI/CD (GitHub Actions)**
- Workflow: `.github/workflows/ci.yml`
- Runs on every push.
- Installs dependencies for `client` and `server`.
- Builds the React client.
- Runs tests when present.
- Performs a backend app load check.
- Add CI screenshots:
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
