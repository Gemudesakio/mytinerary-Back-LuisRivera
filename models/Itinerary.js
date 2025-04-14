import { Schema, model } from "mongoose";

let collection = 'itinerary'

let schema = Schema({
    title: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
    photo: {type:String, required:true},
    duration: {type:String, required:true},
    likes: {type:Number, required:true},
    user: {type:Schema.Types.ObjectId, ref:'user', required:true},
    city: {type:Schema.Types.ObjectId, ref:'city', required:true},
    hashtags: [{ type: String }],
    coments:[
        {
            user:{type:Schema.Types.ObjectId, ref:'user', required:true},
            comment:{type:String, required:true},
            date:{type:Date, default:Date.now()}
        }
    ]
},
{
    timestamps:true
}
)

let Itinerary = model(collection,schema)

export default Itinerary