const mongoose = require('mongoose');
// const {Schema} = mongoose;

const SubscriptionSchema = new mongoose.Schema({

    basic : {
        type : Object,
        required : true,   
    },
    standard : {
        type: Object,
        required:true,
    },
    premium : {
        type: Object,
        
    },
    regular : {
        type: Object,
        required:true
    }
    
  });

const subscriptions = mongoose.model('subscription_plans', SubscriptionSchema);

module.exports = subscriptions; 