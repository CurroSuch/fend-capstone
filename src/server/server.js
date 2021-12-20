// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

//app.use(express.json);
//app.use(express.static('dist'));

const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
const apiKey = process.env.API_KEY_1;
const apiKey2 = process.env.API_KEY_2;
const apiKey3 = process.env.API_KEY_3;
const port = 8091;

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}!`);
;}

// Setup Server
app.post('/posts1', async function (req, res){
    const data = req.body;
    let city = data.value;
    var dataResponse = await sendData1(city);
    res.send(dataResponse);
})

async function sendData1(city){
    let response1 = await axios.get(`http://api.geonames.org/searchJSON?q=${city}&username=${apiKey}`);
    console.log(response1.data)
    return response1.data;
}

app.post('/posts2', async function (req, res) {
    const data2 = req.body;
    let city2 = data2.value;
    var dataResponse2 = await sendData2(city2);
    res.send(dataResponse2);
});

async function sendData2(city2){
    let response2 = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${city2}&key=${apiKey2}&include=minutely`);
    console.log(response2.data)
    return response2.data;
}

app.post('/posts3', async function (req, res) {
    const data3 = req.body;
    let city3 = data3.value;
    var dataResponse3 = await sendData3(city3);
    res.send(dataResponse3);
});

async function sendData3(city3){
    let response3 = await axios.get(`https://pixabay.com/api/?key=${apiKey3}&q=${city3}&image_type=photo`);
    console.log(response3.data)
    return response3.data;
}


const server = app.listen(port, listening);