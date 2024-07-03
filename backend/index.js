
const express = require('express');
const cors = require('cors');
const universityRoutes = require('./routes/UniRoutes');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/universities', universityRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const http = require('http');
// const app = express();
// const server = http.createServer(app);
// const universityRoutes = require('./routes/UniRoutes');

// const corsOptions = {
//   origin: 'http://localhost:3000/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// };

// app.use('/universities', universityRoutes);


// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.static('public'));
// app.use(bodyParser.json());
// // app.use('/auth' , authRoutes);


// // Connect to MongoDB


// const PORT = process.env.PORT || 8000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
