const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mission = new Schema({
    
    start : {
        x :{
            type:Number
        },
        y:{
            type:Number
        }
    },
    end : {
        x:{
            type:Number
        },
        y:{
            type:Number
        }
    }

},{
    timestamps:true
});

const Mission = mongoose.model('Mission',mission);
module.exports = Mission;