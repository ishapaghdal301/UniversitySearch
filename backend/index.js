
const express = require('express');
const cors = require('cors');
const universityRoutes = require('./routes/UniRoutes');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());

app.use('/api/universities', universityRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const corsOptions = {
//   origin: 'http://localhost:3000/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// };

// app.use('/universities', universityRoutes);


// app.use(cors(corsOptions));
