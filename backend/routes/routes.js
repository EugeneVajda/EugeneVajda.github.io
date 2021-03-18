// JSON data
const gifts = [{
    id: 1,
    type: "netflix",
    name: "Netflix",
    describtion: "The best historical movies on netflix",
    price: 8,
    image: "netflix.png"
},
{
    id: 2,
    type: "skyeng",
    name: "Skyeng",
    describtion: "Learn your english",
    price: 19,
    image: "skyeng.png"
},
{
    id: 3,
    type: "netflix",
    name: "Netflix",
    describtion: "The best historical movies on netflix",
    price: 4,
    image: "netflix.png"
},
];

const users = [
    {
        id: "5F4DCC3B5AA765D61D8327DEB882CF99",
        name: "Steve",
        image: "steve.png"
    },
    {
        id: "20EB1B22A92B5C573DC1EB4331FC49EE",
        name: "Lavanda",
        image: "lavanda.png"
    }
];

// Router
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/gifts', (request, response) => {
        response.send(gifts);
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}

// Export the router
module.exports = router;
