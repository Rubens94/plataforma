const mongoose = require('mongoose');

const dbConnection = async() => {

    const { MONGO_DB, MONGO_DB_TEST, NODE_ENV } = process.env;

    const db = NODE_ENV === 'test' ? MONGO_DB_TEST : MONGO_DB;
    
    try{

        await mongoose.connect( db, {
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