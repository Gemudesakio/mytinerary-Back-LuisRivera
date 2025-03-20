import mongoose from "mongoose";
 const url = process.env.URL

  async function connect(){
   try {
     await mongoose.connect(url)
     console.log("Database was connected");
     
   } catch (error) {
     console.log("Database was not conected"+error);
     
   }
 }
 connect()