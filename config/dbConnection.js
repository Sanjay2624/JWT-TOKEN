const mongoose = require('mongoose');

//Mongo connect
const mongodbConnect = ()=> { mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log(`MongoDB is connected`))
        .catch((err) => console.log(err));
    };

module.exports = {
    mongodbConnect,
}