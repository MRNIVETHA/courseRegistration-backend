const mongoose = require('mongoose')

const proschema = mongoose.Schema(
    {
        name:{
            type: String ,
            require:[true, "Enter student name "]
        },
        Department:{
            type: String,
            required:true,
        },
        Course:{
            type: String,
            required:[true ,"please enter course name"],
        },
        Course_id:{
            type: Number,
            required:true
        }
    }
)

const Product = mongoose.model('Product', proschema);

module.exports= Product;