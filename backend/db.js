const mongoose = require('mongoose');

const mongoURI = 'mongodb://0.0.0.0:27017/richpanel-subscriptions?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'


const connectMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("successfully connected");
    }).catch((err) => {
        console.log(err)
    })
} 


module.exports = connectMongo;