import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import customerRoutes from './routes/customer.js';
import { createRequire } from 'module'


const app = express();
const PORT = process.env.PORT || 5000;
const require = createRequire(import.meta.url);
require('dotenv').config();
// Middleware
app.use(bodyParser.json());
app.use(cors());


// MongoDB Connection
const uri =process.env.YOUR_MONGODB_CONNECTION_STRING;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use('/api/customers', customerRoutes);
app.get('/', (req, res) => res.send('Hotel Management System API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
