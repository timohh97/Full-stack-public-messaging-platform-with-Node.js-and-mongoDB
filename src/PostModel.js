const mongoose = require("mongoose")

const PostPattern = mongoose.Schema({
    username: {
       type: String,
       required:false
    },
    password: {
        type: String,
        required:false
     },
     email:{
        type:String,
        required:false
     }
})


module.exports = mongoose.model("Posts", PostPattern)