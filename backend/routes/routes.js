const { Sequelize, DataTypes } = require('sequelize');

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
}
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

const sequelize = new Sequelize(
    'postgres://aadiqujhigdxly:6bc1549861469984166e28d5c074070af70622d5a05c66ee61bbf70bdde4f45d@ec2-34-195-233-155.compute-1.amazonaws.com:5432/dbacs1015at680',{        
        "dialectOptions": {
            "ssl": {
                "require": true,
                "rejectUnauthorized": false
            }
        }
    }      
) // Example for postgres
var User = require('../models/user')(sequelize, DataTypes);
var UserScores = require('../models/user_category_score')(sequelize, DataTypes);
var Category = require('../models/category')(sequelize, DataTypes);

// Router
const router = app => {
    app.get('/', async(request, response) => {
        try {
            await sequelize.authenticate();
            response.send({
                message: 'Connection has been established successfully.'
            });
        } catch (error) {
            response.send({
                message: 'Unable to connect to the database:'
            });
            console.error('Unable to connect to the database:', error);
        }     
    });

    app.get('/gifts', (request, response) => {
        response.send(gifts);
    });

    app.get('/users', (request, response) => {
        User.findAll().then(users=>{
            response.send(users);
       }).catch(err=>response.send(err)); 
    });

    app.get('/user-scores/:id', (request, response) => {
        let id = request.params.id;
        UserScores.findAll({where: {user_id: id}}).then(scores=>{
            response.send(scores);
       }).catch(err=>response.send(err)); 
    });
    
    app.get('/categories', (request, response) => {
        console.log(request.params);
        Category.findAll().then(categories=>{
            response.send(categories);
       }).catch(err=>response.send(err)); 
    });
    
}

// Export the router
module.exports = router;


