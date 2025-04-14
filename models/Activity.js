import { Schema,model } from "mongoose";


let collection = 'activity'

let schema = Schema({
    itineraryId: {type:Schema.Types.ObjectId, ref:'itinerary', required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    duration: {type:String, required:true},
    photo: {type:String, required:true},
},
{
    timestamps:true
}
)
let Activity = model(collection,schema)
export default Activity