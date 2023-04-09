const mongoose = require('mongoose')
const userModel = mongoose.model("note",{
    name:{
        type:String
    },
    content:{
        type:String
    },
    dueDate:{
        type:Date
    },
    status:{
        type:Boolean
    }
})

module.exports = userModel