import { Schema,model } from "mongoose";

const collection ='city'
let schema = Schema({
    name:{type:String,required:true},
    photo:{type:String,required:false},
    country:{type:String, required:true},
    continent:{type:String,required:true},
    description:{type:String,required:true},
    currency:{type:String,requiredd:true},
    yearFoundation:{type:Number,required:true},
    likes:{type:Number, default: 0}
},
{
    timestamps:true
})

const City =  model(collection,schema)

export default City