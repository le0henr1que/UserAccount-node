const mongoose = require('mongoose')
class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB(){

        this.mongoDBConnection = mongoose.connect("mongodb+srv://leonardo:PeqoiVL1r6mmyK5e@cluster0.puymz.mongodb.net/acountUser?retryWrites=true&w=majority", {
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