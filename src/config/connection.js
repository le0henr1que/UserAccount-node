const mongoose = require('mongoose')
class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB(){

        this.mongoDBConnection = mongoose.connect("mongodb://gracious-roentgen-4c8d9c.netlify.app/nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        .then(() => {
            console.log("Conexão estabelecida com o mongoDB sucesso")
        })
        .catch((error)=>{
            console.log(`Error ao estabelecer conexão com mongodb: ${error}`)
        })

    }
}

module.exports = new Connection();