const mongoose = require("mongoose")


    const userSchema = new mongoose.Schema({ 
      
            username: {
                type: String,
                required: true,
            },
            
            password: {
                type:String,
                required: true,
            },

            createdAt: Date,
            updatedAt: Date
            
    });
  
    
    const apilistSchema = new mongoose.Schema({
        apiname: {
            type: String,
            required: true,
        },
        description: { 
            type: String, 
            required: true,
         },
        imageurl: { 
            type: String,
            required: true,
            },
        apilink: { 
            type: String, 
            required: true 
        },
        createdAt: Date,
        updatedAt: Date
       
    });
    
    const user = mongoose.model('user', userSchema);
    const api = mongoose.model('api', apilistSchema);
    
    var my_schemas = {
       "user": user,
       "api": api,
    };

module.exports = my_schemas;