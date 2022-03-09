const {Router} = require("express")
const UserController = require("./app/Controllers/UserController")

var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.json());

       app.use((req, res, next) => {
            
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Credentials", true);
            res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE")
            res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-width")
           app.use(cors())
            next();
        })


const routes = new Router();

routes.post("/store", UserController.store );
routes.get("/user", UserController.show );


module.exports = routes