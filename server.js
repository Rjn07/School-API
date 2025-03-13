
const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const schoolRoutes = require('./routes/schoolRoutes');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

app.use('/schools', schoolRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});