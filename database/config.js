const mongoose = require('mongoose');

const dbConnection = async() => {

    try{

        await mongoose.connect( process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('DB online');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    dbConnection
}