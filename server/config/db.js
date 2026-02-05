import mongoose from 'mongoose';

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    const message = 'MONGO_URI is not set. Skipping database connection.';
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message);
    }
    console.warn(message);
    return;
  }

  try {
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection established');
    });

    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
    });

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: Number(process.env.MONGO_MAX_POOL_SIZE || 10),
      minPoolSize: Number(process.env.MONGO_MIN_POOL_SIZE || 0),
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);

    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;
