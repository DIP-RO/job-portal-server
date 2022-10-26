const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./Data/courses.json');


app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/', (req, res) => {
    res.send("Fun Code server is running");
})

app.listen(port, () => {
 console.log(`Fun Code Running On Port ${port}`);
})