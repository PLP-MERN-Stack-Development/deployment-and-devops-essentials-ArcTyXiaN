import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { initSentry } from './utils/sentry.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

await initSentry(app);

app.use(helmet());
app.use(cors(corsOptions));
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Blog API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', commentRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
