export const initSentry = async (app) => {
  if (!process.env.SENTRY_DSN) {
    return;
  }

  try {
    const Sentry = await import('@sentry/node');

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
    });

    app.use((req, res, next) => {
      Sentry.setContext('request', {
        method: req.method,
        url: req.originalUrl,
        userAgent: req.headers['user-agent'],
      });
      next();
    });

    app.use((err, req, res, next) => {
      Sentry.captureException(err);
      next(err);
    });

    console.log('Sentry initialized');
  } catch (error) {
    console.warn('Sentry failed to initialize:', error.message);
  }
};
