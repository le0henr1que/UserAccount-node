const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./config/connection')

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

   

    middlewares() {
        this.app.use(express.json());

        this.app.use((req, res, next) => {
            res.options ( ' * ')
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Credentials", true);
            res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE")
            res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-width")
            this.app.use(cors())
            next();
        })
    }

    routes(){
        this.app.use(routes)
    }

}
module.exports = new App().app;