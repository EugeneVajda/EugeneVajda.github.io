# dipeus-bot-template

> Dipeus template for slack bot

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Docker

``` bash
# build image with frontend
docker build -t dipeus-frontend . 
# run container with frontend
docker run -it -p 8081:80 --rm --name dipeus-frontend-container dipeus-frontend

# build image with backend
docker build -t dipeus-backend .
# run container with backend
docker run -it -p 3002:3002 --rm --name dipeus-backend-container dipeus-backend
```

## DB
# get all models from db
``` bash
node_modules\.bin\sequelize-auto -o "./models" -d "dbacs1015at680" -h "ec2-34-195-233-155.compute-1.amazonaws.com" -u "aadiqujhigdxly" -p 5432 -x "6bc1549861469984166e28d5c074070af70622d5a05c66ee61bbf70bdde4f45d" -e postgres -c config.json
```
