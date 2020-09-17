const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({

    dateForRequest:{
        type:Date,
        required:true
    },

    rooms:{
        type:String,
        required:false,
    },

    requirements:{
        type:String,
        required:true,
    },

    eventName:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    status:{
        type:Number,
        required:true,
    }
});

const Form = mongoose.model("Form",formSchema);

module.exports = Form;