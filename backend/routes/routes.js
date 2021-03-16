// JSON data
const gifts = [{
    id: 1,
    name: "Netflix",
    describtion: "The best historical movies on netflix",
    price: 8,
    image: "image2.png"
},
{
    id: 2,
    name: "Skyeng",
    describtion: "Learn your english",
    price: 19,
    image: "image.png"
},
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
}

// Export the router
module.exports = router;
