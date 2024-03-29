// Require packages and set the port
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js')
const cors = require('cors')
const app = express();

app.use(cors())

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(process.env.PORT || port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});