import express from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'

const PORT=process.env.PORT|| 4000
const app=express()

const REDIS_PORT=6379
const REDIS_HOST="redis"

const client = await createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
})
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

const USER_NAME='root'
const PASSWORD='example'
const DB_PORT=27017
const DB_HOST ="mongo"
const DB_URI=`mongodb://${USER_NAME}:${PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(DB_URI).then(
()=>{
    console.log("connected")
}

).catch((err)=>{
console.log(err)
});

app.use(express.json());
app.get('/api/test', (req, res) => {
    // Print the request body
    console.log('Request Body:', req.body);

    // Print query parameters
    console.log('Query Parameters:', req.query);

    // Prepare the response
    const responseMessage = {
        message: 'GET request received!',
        receivedBody: req.body,  // Include the body in the response for visibility
        queryParameters: req.query  // Include query parameters in the response
    };

    // Print the response to console
    console.log('Response:', responseMessage);

    // Send the response back to the client
    res.json(responseMessage);
});
app.get('/', (req, res) => {
    // Print the request body
    console.log('Request Body:', req.body);

    // Print query parameters
    console.log('Query Parameters:', req.query);

    // Prepare the response
    const responseMessage = {
        message: 'GET request received!',
        receivedBody: req.body,  // Include the body in the response for visibility
        queryParameters: req.query  // Include query parameters in the response
    };

    // Print the response to console
    console.log('Response:', responseMessage);

    // Send the response back to the client
    res.json(responseMessage);
});
app.listen(PORT,()=>{
    console.log(PORT)
})