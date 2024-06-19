const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute');
const todoRouter = require('./routes/todoRoute')


dotenv.config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
 app.use('/api/users', userRouter) 
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/', (req,res)=>{   // for api testing purpose 
    res.send('Jai Shree Ram')
})