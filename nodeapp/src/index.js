const express =require("express")

const PORT=4000
const app=express()
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
app.listen(PORT,()=>{
    console.log(PORT)
})