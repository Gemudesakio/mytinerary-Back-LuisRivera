import { Schema, model } from "mongoose";

let collection = 'user'
let schema = Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:false},
    country:{type:String, required:false},
    role: {type:Number, default:1},
    online: {type:Boolean, default:false}
},
{
    timestamps:true
}
)

let User = model(collection,schema)

export default User