require('dotenv').config();
const express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    app = express();

const connection = require('./Database/Connection');
const userRouter = require('./router/AuthRoute');
const RoomRouter = require('./router/RoomRoute');
const RecommendRouter = require('./router/Recommend');
const BookingRouter = require('./router/BookingRoute');

/*middlewares */
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use(cookieParser());


// Use the router middleware for user
app.use('/', userRouter);
app.use('/api', userRouter);

//use the router for rooms
app.use('/room', RoomRouter);

//use the router for recommend
app.use('/recommend', RecommendRouter);

//use the router for Booking
app.use('/booking', BookingRouter);

//connection to the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    connection();
    console.log(`server started at http://localhost:${port}`);
})