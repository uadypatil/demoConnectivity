import express from 'express';
import dotenv from 'dotenv';

import studentRoutes from './routes/studentRoutes.js';
import contactUsRoutes from './routes/contactUsRoutes.js';
import hireMeRoutes from './routes/hireMeRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/contact-us', contactUsRoutes);
app.use('/api/hire-me', hireMeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
