const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

// Simplify CORS configuration
const corsOptions = {
    origin: "http://localhost:5173",
    methods: 'GET, POST, PUT, DELETE, PATCH',
    credentials: true
};

app.use(cors(corsOptions));

// Remove manual setting of CORS headers
// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//   "Access-Control-Allow-Methods",
//   "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//   "Access-Control-Allow-Headers",
//   "Origin, Cache-Control, Accept, X-Access-Token, X-Requested-With, Content-Type, Access-Control-Request-Method"
//   );
//   if (req.method === "OPTIONS") {
//   return res.status(200).end();
//   }
//   next();
// });

const errorMiddleware = require('./middlewares/errorHandlers');
const mongoose = require('mongoose');

// Mongoose connection setup
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Registration');
    console.log('Connected to MongoDB');
}
main().catch(err => console.log(err));

// Routes
const authRouter = require('./routes/auth-route');
app.use('/api/auth', authRouter);

const contactRouter = require('./routes/contact-route');
app.use('/api/form', contactRouter);

// Error handling middleware
app.use(errorMiddleware);

// Start server on port 5000
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
