require('dotenv').config();
const express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    app = express();

const connection = require('./Database/Connection');
const router = require('./router/Route');

/*middlewares */
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(morgan('tiny'));
app.disable('x-powered-by');



/*middlewares */
app.get('/', (req, res) => {
    res.send("Hello World");

})
app.use('/api', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    connection();
    console.log(`server started at http://localhost:${3000}`);
})